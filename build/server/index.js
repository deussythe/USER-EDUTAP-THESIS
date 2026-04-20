import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, useMatches, useActionData, useLoaderData, useParams, useRouteError, Meta, Links, ScrollRestoration, Scripts, Outlet, isRouteErrorResponse } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { createElement, useState, useEffect, useRef } from "react";
import { ShoppingCart, AlertCircle, ShoppingBag, Clock, Share2, Settings, LogOut, Bell, Download, TrendingUp, ChevronUp, ChevronDown, Wallet, X, Check, User, Mail, Lock, EyeOff, Eye, Edit2, TrendingDown, AlertTriangle, Star } from "lucide-react";
import { getAuth, signInWithEmailAndPassword, updateProfile, updateEmail, EmailAuthProvider, reauthenticateWithCredential, updatePassword, onAuthStateChanged } from "firebase/auth";
import { getFirestore, getDoc, doc, onSnapshot, updateDoc, query, collection, where, orderBy, addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
function withComponentProps(Component) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      matches: useMatches()
    };
    return createElement(Component, props);
  };
}
function withErrorBoundaryProps(ErrorBoundary3) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      error: useRouteError()
    };
    return createElement(ErrorBoundary3, props);
  };
}
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
const firebaseConfig = {
  apiKey: "AIzaSyCNe8-dYnbPW5Ja8Ixb9xuxB0PIwWu2-Ns",
  authDomain: "edutap-thesis.firebaseapp.com",
  databaseURL: "https://edutap-thesis-default-rtdb.firebaseio.com",
  projectId: "edutap-thesis",
  storageBucket: "edutap-thesis.firebasestorage.app",
  messagingSenderId: "925689449246",
  appId: "1:925689449246:web:50092c0c3f35c73e39170f",
  measurementId: "G-S0LN7ZY452"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
getDatabase(app);
function LoginForm({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    if (!email || !password) {
      setError("Please enter both email and password");
      setIsLoading(false);
      return;
    }
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const uid = userCredential.user.uid;
      const userDoc = await getDoc(doc(db, "users", uid));
      if (!userDoc.exists()) {
        setError("Account not found. Please contact admin.");
        setIsLoading(false);
        return;
      }
      const role = userDoc.data().role;
      localStorage.setItem("username", userDoc.data().name || email);
      localStorage.setItem("role", role);
      onLogin(role);
      setTimeout(() => {
        if (role === "admin") {
          window.location.href = "/admin-panel";
        } else if (role === "staff") {
          window.location.href = "/pos";
        } else if (role === "parent") {
          window.location.href = "/parent-dashboard";
        } else {
          setError("Unknown role. Please contact admin.");
        }
      }, 500);
    } catch (err) {
      console.error(err);
      if (err.code === "auth/user-not-found" || err.code === "auth/wrong-password" || err.code === "auth/invalid-credential") {
        setError("Invalid email or password.");
      } else {
        setError("Login failed. Please try again.");
      }
      setIsLoading(false);
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-gradient-to-br from-red-950 via-red-900 to-red-900 p-4", children: /* @__PURE__ */ jsxs("div", { className: "w-full max-w-md rounded-xl border border-red-700 bg-white shadow-2xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-3 p-6 text-center bg-gradient-to-r from-red-900 to-red-800 rounded-t-xl", children: [
      /* @__PURE__ */ jsx("div", { className: "mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg", children: /* @__PURE__ */ jsx(ShoppingCart, { className: "h-8 w-8 text-red-900" }) }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white", children: "EDUTAP" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-red-100", children: "St. Clare College of Caloocan" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
      /* @__PURE__ */ jsx("p", { className: "text-center text-sm text-gray-600 mb-6", children: "Sign in to access your dashboard" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "text-sm font-medium text-gray-700", children: "Email" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "email",
              type: "email",
              placeholder: "Enter your email",
              value: email,
              onChange: (e) => setEmail(e.target.value),
              onKeyDown: (e) => e.key === "Enter" && handleSubmit(e),
              autoComplete: "email",
              autoFocus: true,
              disabled: isLoading,
              className: "w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-red-800 focus:outline-none focus:ring-2 focus:ring-red-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "password", className: "text-sm font-medium text-gray-700", children: "Password" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "password",
              type: "password",
              placeholder: "Enter your password",
              value: password,
              onChange: (e) => setPassword(e.target.value),
              onKeyDown: (e) => e.key === "Enter" && handleSubmit(e),
              autoComplete: "current-password",
              disabled: isLoading,
              className: "w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-red-800 focus:outline-none focus:ring-2 focus:ring-red-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
            }
          )
        ] }),
        error && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 rounded-md bg-red-50 p-3 text-sm text-red-600 border border-red-200", children: [
          /* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { children: error })
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: handleSubmit,
            disabled: isLoading,
            className: "w-full rounded-lg bg-gradient-to-r from-red-900 to-red-800 px-4 py-2.5 text-sm font-semibold text-white transition hover:from-red-800 hover:to-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed shadow-md",
            children: isLoading ? "Signing in..." : "Sign In"
          }
        )
      ] })
    ] })
  ] }) });
}
async function loader() {
  return null;
}
const loginPage = withComponentProps(function LoginPage() {
  const handleLogin = (username) => {
    const role = username === "admin" ? "admin" : username === "staff" ? "staff" : "parent";
    localStorage.setItem("username", username);
    localStorage.setItem("role", role);
    if (username === "admin") {
      window.location.href = "/admin-panel";
    } else if (username === "staff") {
      window.location.href = "/pos";
    } else if (username === "parent") {
      window.location.href = "/parent-dashboard";
    }
  };
  return /* @__PURE__ */ jsx("div", {
    children: /* @__PURE__ */ jsx(LoginForm, {
      onLogin: handleLogin
    })
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: loginPage,
  loader
}, Symbol.toStringTag, { value: "Module" }));
function ParentHeader({ username, currentTime, onShare, onLogout, onSettingsClick }) {
  return /* @__PURE__ */ jsx("header", { className: "bg-gradient-to-r from-red-950 to-red-900 border-b border-red-900 px-4 py-3", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
      /* @__PURE__ */ jsx("div", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-red-900", children: /* @__PURE__ */ jsx(ShoppingBag, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-sm font-semibold text-white leading-tight", children: "EDUTAP" }),
        /* @__PURE__ */ jsx("p", { className: "hidden sm:block text-xs text-red-100 truncate", children: "St. Clare College of Caloocan" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 sm:gap-3 shrink-0", children: [
      /* @__PURE__ */ jsxs("span", { className: "hidden md:block text-xs text-white", children: [
        username,
        " (Parent)"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "hidden sm:flex items-center gap-1 text-xs text-red-100", children: [
        /* @__PURE__ */ jsx(Clock, { className: "h-3 w-3" }),
        /* @__PURE__ */ jsx("span", { className: "font-mono", children: currentTime })
      ] }),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: onShare,
          className: "flex items-center gap-1 rounded-lg bg-white/10 border border-white/20 px-2 py-1.5 text-xs font-semibold text-white hover:bg-white/20",
          children: [
            /* @__PURE__ */ jsx(Share2, { className: "h-3.5 w-3.5" }),
            /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "Share" })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: onSettingsClick,
          className: "flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm text-white hover:bg-white/20 transition",
          children: /* @__PURE__ */ jsx(Settings, { className: "h-4 w-4" })
        }
      ),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: onLogout,
          className: "flex items-center gap-1 rounded-lg bg-white border border-white px-2 py-1.5 text-xs font-semibold text-red-900 hover:bg-red-50",
          children: [
            /* @__PURE__ */ jsx(LogOut, { className: "h-3.5 w-3.5" }),
            /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "Logout" })
          ]
        }
      )
    ] })
  ] }) });
}
function Notifications({ notifications, onNotificationClick, onClearAll }) {
  return /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-gray-200 bg-white p-5 shadow-sm h-80 flex flex-col", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center justify-between shrink-0", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-base font-bold text-gray-900", children: "Notifications" }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxs("span", { className: "rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-600", children: [
          notifications.length,
          " New"
        ] }),
        notifications.length > 0 && /* @__PURE__ */ jsx("button", { onClick: onClearAll, className: "text-xs text-red-600 hover:text-red-700", children: "Clear All" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-3 overflow-y-auto pr-1 flex-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]", children: notifications.length === 0 ? /* @__PURE__ */ jsxs("div", { className: "py-8 text-center text-gray-500", children: [
      /* @__PURE__ */ jsx(Bell, { className: "mx-auto mb-2 h-8 w-8 text-gray-300" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm", children: "No notifications" })
    ] }) : notifications.map((notification) => /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => onNotificationClick(notification),
        className: "flex w-full items-start gap-3 border-b border-gray-100 pb-3 text-left transition hover:bg-gray-50 last:border-0",
        children: [
          /* @__PURE__ */ jsx("div", { className: `flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${notification.icon === "purchase" ? "bg-blue-100" : "bg-red-100"}`, children: notification.icon === "purchase" ? /* @__PURE__ */ jsx(ShoppingBag, { className: "h-4 w-4 text-blue-600" }) : /* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4 text-red-600" }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold text-gray-900", children: notification.title }),
            /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500", children: notification.description }),
            /* @__PURE__ */ jsx("div", { className: "mt-1 text-xs text-gray-400", children: notification.timestamp })
          ] }),
          notification.amount && /* @__PURE__ */ jsxs("div", { className: `text-sm font-bold shrink-0 ${notification.amount < 0 ? "text-red-600" : "text-green-600"}`, children: [
            notification.amount < 0 ? "−" : "+",
            "₱",
            Math.abs(notification.amount).toFixed(2)
          ] })
        ]
      },
      notification.id
    )) })
  ] });
}
function RecentActivity({ activities, onDownloadClick }) {
  const [expandedId, setExpandedId] = useState(null);
  const toggle = (id) => setExpandedId((prev) => prev === id ? null : id);
  return /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-gray-200 bg-white p-5 shadow-sm h-80 flex flex-col", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-5 flex items-center justify-between shrink-0", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-base font-bold text-gray-900", children: "Recent Activity" }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: onDownloadClick,
          className: "flex items-center gap-1 rounded-lg border border-gray-300 px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-50",
          children: [
            /* @__PURE__ */ jsx(Download, { className: "h-3 w-3" }),
            "Export"
          ]
        }
      ) })
    ] }),
    activities.length === 0 ? /* @__PURE__ */ jsx("div", { className: "py-8 text-center text-sm text-gray-400 flex-1", children: "No activity yet" }) : /* @__PURE__ */ jsx("div", { className: "space-y-2 overflow-y-auto pr-1 flex-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]", children: activities.map((activity) => {
      var _a, _b;
      return /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-gray-100 overflow-hidden", children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-50 transition-colors",
            onClick: () => {
              var _a2;
              return ((_a2 = activity.items) == null ? void 0 : _a2.length) > 0 && toggle(activity.id);
            },
            children: [
              /* @__PURE__ */ jsx("div", { className: `flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${activity.type === "expense" ? "bg-red-100" : "bg-green-100"}`, children: activity.type === "expense" ? /* @__PURE__ */ jsx(ShoppingBag, { className: "h-4 w-4 text-red-600" }) : /* @__PURE__ */ jsx(TrendingUp, { className: "h-4 w-4 text-green-600" }) }),
              /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold text-gray-900 truncate", children: activity.item }),
                /* @__PURE__ */ jsxs("div", { className: "text-xs text-gray-400", children: [
                  activity.date,
                  " • ",
                  activity.time
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
                /* @__PURE__ */ jsxs("span", { className: `text-sm font-bold ${activity.amount < 0 ? "text-red-600" : "text-green-600"}`, children: [
                  activity.amount < 0 ? "−" : "+",
                  "₱",
                  Math.abs(activity.amount).toFixed(2)
                ] }),
                ((_a = activity.items) == null ? void 0 : _a.length) > 0 && (expandedId === activity.id ? /* @__PURE__ */ jsx(ChevronUp, { className: "h-4 w-4 text-gray-400" }) : /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 text-gray-400" }))
              ] })
            ]
          }
        ),
        expandedId === activity.id && ((_b = activity.items) == null ? void 0 : _b.length) > 0 && /* @__PURE__ */ jsxs("div", { className: "border-t border-gray-100 bg-gray-50 px-4 py-3", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide", children: "Order breakdown" }),
          /* @__PURE__ */ jsx("div", { className: "space-y-1.5", children: activity.items.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-xs", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxs("span", { className: "inline-flex h-5 w-5 items-center justify-center rounded-full bg-gray-200 text-gray-600 font-medium text-[10px]", children: [
                item.qty,
                "x"
              ] }),
              /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: item.name })
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "text-gray-500", children: [
              "₱",
              (item.price * item.qty).toFixed(2)
            ] })
          ] }, i)) }),
          /* @__PURE__ */ jsxs("div", { className: "mt-2 pt-2 border-t border-gray-200 flex justify-between text-xs font-semibold text-gray-700", children: [
            /* @__PURE__ */ jsx("span", { children: "Total" }),
            /* @__PURE__ */ jsxs("span", { children: [
              "₱",
              Math.abs(activity.amount).toFixed(2)
            ] })
          ] })
        ] })
      ] }, activity.id);
    }) })
  ] });
}
function BalanceSidebar({ balance, paymentMethods, selectedPayment, onPaymentSelect, onTopUpClick }) {
  const handlePaymentClick = (id) => {
    if (selectedPayment === id) {
      onPaymentSelect(null);
    } else {
      onPaymentSelect(id);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex w-full flex-col bg-white p-4 sm:p-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold text-gray-900", children: "Current Balance" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: "Jane Parent's Wallet" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-6 flex flex-1 flex-col items-center justify-center text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-4 text-5xl text-gray-300", children: /* @__PURE__ */ jsx(Wallet, { className: "h-12 w-12" }) }),
      /* @__PURE__ */ jsx("p", { className: "mb-2 text-sm text-gray-500", children: "Available Funds" }),
      /* @__PURE__ */ jsxs("p", { className: "mb-1 text-4xl font-extrabold text-gray-900", children: [
        "₱",
        balance.toFixed(2)
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-400", children: "Last updated just now" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "border-t border-gray-200 pt-6", children: [
      /* @__PURE__ */ jsx("h3", { className: "mb-3 text-sm font-semibold text-gray-700", children: "Quick Top-Up" }),
      /* @__PURE__ */ jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => handlePaymentClick("gcash"),
          className: `w-full flex items-center justify-center gap-2 rounded-lg border p-3 text-center text-sm font-medium transition ${selectedPayment === "gcash" ? "border-blue-600 bg-blue-50 text-blue-700 font-bold" : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50"}`,
          children: [
            /* @__PURE__ */ jsx("span", { className: "text-xl text-blue-600", children: "📱" }),
            "GCash"
          ]
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "mb-6 flex items-center justify-between text-lg font-bold text-gray-900", children: [
        /* @__PURE__ */ jsx("span", { children: "Account Total" }),
        /* @__PURE__ */ jsxs("span", { children: [
          "₱",
          balance.toFixed(2)
        ] })
      ] }),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: onTopUpClick,
          disabled: !selectedPayment,
          className: `flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3.5 text-base font-semibold text-white transition ${selectedPayment ? "bg-gray-600 hover:bg-gray-700" : "bg-gray-300 cursor-not-allowed"}`,
          children: [
            /* @__PURE__ */ jsx(Wallet, { className: "h-5 w-5" }),
            "Top Up Wallet"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx("style", { children: `
                .selected {
                    background-color: #3b82f6;
                    color: #fff;
                }
            ` })
  ] });
}
function TopUpModal({ isOpen, onClose, onSubmit }) {
  const [amount, setAmount] = useState("");
  const [refNumber, setRefNumber] = useState("");
  const [isZoomed, setIsZoomed] = useState(false);
  const [qrMap, setQrMap] = useState({});
  const quickAmounts = [50, 100, 200, 500];
  useEffect(() => {
    const docRef = doc(db, "settings", "payment_qr");
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        setQrMap(docSnap.data());
      }
    });
    return () => unsubscribe();
  }, []);
  const getQRCodePath = () => {
    if (amount && qrMap[amount]) {
      return qrMap[amount];
    }
    return qrMap["generic"] || "https://res.cloudinary.com/dd8hz51ff/image/upload/v1776419738/IMG_20260417_175022_szpu2a.jpg";
  };
  if (!isOpen) return null;
  const handleSubmit = () => {
    onSubmit(amount, refNumber);
    setAmount("");
    setRefNumber("");
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm", children: /* @__PURE__ */ jsxs(
      "div",
      {
        className: "w-full max-w-[400px] mx-4 max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-4 sm:p-5 shadow-xl scrollbar-hide",
        onClick: (e) => e.stopPropagation(),
        children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-gray-900", children: "Top Up via GCash" }),
            /* @__PURE__ */ jsx("button", { onClick: onClose, className: "rounded-full p-1 transition hover:bg-gray-100", children: /* @__PURE__ */ jsx(X, { className: "h-5 w-5 text-gray-500" }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mb-4 flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 p-3 transition-all duration-300", children: [
            /* @__PURE__ */ jsx("p", { className: "mb-2 text-sm font-semibold text-gray-700", children: "Scan to Pay" }),
            /* @__PURE__ */ jsx(
              "img",
              {
                src: getQRCodePath(),
                alt: `GCash QR Code`,
                onClick: () => setIsZoomed(true),
                className: "mb-2 h-64 w-64 cursor-pointer rounded-lg object-contain shadow-sm transition-transform duration-300 hover:scale-105"
              }
            ),
            /* @__PURE__ */ jsx("p", { className: "text-xs font-medium text-gray-500", children: "EDUTAP Admin • 09 ** *** ****" }),
            amount && /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs font-bold text-blue-600", children: ["50", "100", "200", "500"].includes(amount) ? "Exact amount embedded in QR!" : "Please input the exact amount in GCash" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsx("label", { className: "mb-1 block text-sm font-medium text-gray-700", children: "Amount Paid" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "number",
                value: amount,
                onChange: (e) => setAmount(e.target.value),
                placeholder: "0.00",
                className: "w-full rounded-lg border border-gray-300 px-3 py-2 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-4 gap-2", children: quickAmounts.map((amt) => /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => setAmount(amt.toString()),
              className: "rounded-lg border border-gray-200 py-1.5 text-sm font-medium text-gray-600 transition hover:border-gray-300 hover:bg-gray-50",
              children: [
                "₱",
                amt
              ]
            },
            amt
          )) }) }),
          /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsx("label", { className: "mb-1 block text-sm font-medium text-gray-700", children: "Reference Number" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                value: refNumber,
                onChange: (e) => setRefNumber(e.target.value),
                placeholder: "Enter 13-digit ref number",
                className: "w-full rounded-lg border border-gray-300 px-3 py-2 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: handleSubmit,
              disabled: !amount || refNumber.length !== 13,
              className: `w-full rounded-lg py-2.5 font-semibold text-white transition ${amount && refNumber.length === 13 ? "bg-blue-600 hover:bg-blue-700" : "cursor-not-allowed bg-gray-300"}`,
              children: "Submit Top Up Ticket"
            }
          )
        ]
      }
    ) }),
    isZoomed && /* @__PURE__ */ jsx(
      "div",
      {
        className: "fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-md",
        onClick: () => setIsZoomed(false),
        children: /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col items-center", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setIsZoomed(false),
              className: "absolute -right-4 -top-12 rounded-full p-2 text-white transition hover:bg-white/20",
              children: /* @__PURE__ */ jsx(X, { className: "h-8 w-8" })
            }
          ),
          /* @__PURE__ */ jsx(
            "img",
            {
              src: getQRCodePath(),
              alt: "Zoomed GCash QR Code",
              className: "max-h-[75vh] max-w-[90vw] rounded-xl object-contain shadow-2xl"
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm font-medium text-white", children: "Scan with GCash App" })
        ] })
      }
    ),
    /* @__PURE__ */ jsx("style", { children: `
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            ` })
  ] });
}
function ActivityFilterModal({ isOpen, currentFilter, onClose, onSelectFilter }) {
  if (!isOpen) return null;
  const options = [
    { value: "all", label: "All Transactions" },
    { value: "expense", label: "Expenses Only" },
    { value: "income", label: "Income Only" }
  ];
  return /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-[9999] flex items-center justify-center bg-black/30 backdrop-blur-sm", children: /* @__PURE__ */ jsxs("div", { className: "w-full max-w-sm rounded-xl bg-white p-6 shadow-xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center justify-between", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-900", children: "Filter Activity" }),
      /* @__PURE__ */ jsx("button", { onClick: onClose, className: "text-gray-400 hover:text-gray-600", children: /* @__PURE__ */ jsx(X, { className: "h-6 w-6" }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-2", children: options.map((option) => /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => {
          onSelectFilter(option.value);
          onClose();
        },
        className: `w-full rounded-lg border p-3 text-left font-medium transition ${currentFilter === option.value ? "border-gray-600 bg-gray-100" : "border-gray-300 hover:bg-gray-50"}`,
        children: option.label
      },
      option.value
    )) })
  ] }) });
}
function SettingsModal({ isOpen, onClose, currentName, currentEmail, studentId }) {
  const [tab, setTab] = useState("info");
  const [name, setName] = useState(currentName);
  const [email, setEmail] = useState(currentEmail);
  const [isEditingName, setIsEditingName] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  useEffect(() => {
    if (isOpen) {
      setName(currentName);
      setEmail(currentEmail);
      setIsEditingName(false);
      setSuccessMsg("");
      setErrorMsg("");
    }
  }, [isOpen]);
  if (!isOpen) return null;
  const clearMessages = () => {
    setSuccessMsg("");
    setErrorMsg("");
  };
  const handleSaveInfo = async () => {
    clearMessages();
    if (!name.trim() || !email.trim()) {
      setErrorMsg("Name and email cannot be empty.");
      return;
    }
    setLoading(true);
    try {
      const user = auth.currentUser;
      if (!user) throw new Error("Not logged in");
      await updateProfile(user, { displayName: name });
      if (email !== user.email) await updateEmail(user, email);
      if (studentId) {
        await updateDoc(doc(db, "students", studentId), { name });
      }
      setSuccessMsg("Info updated successfully!");
    } catch (err) {
      setErrorMsg(err.message || "Failed to update info.");
    } finally {
      setLoading(false);
    }
  };
  const handleChangePassword = async () => {
    clearMessages();
    if (!currentPassword || !newPassword || !confirmPassword) {
      setErrorMsg("Please fill in all password fields.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setErrorMsg("New passwords do not match.");
      return;
    }
    if (newPassword.length < 6) {
      setErrorMsg("New password must be at least 6 characters.");
      return;
    }
    setLoading(true);
    try {
      const user = auth.currentUser;
      if (!user || !user.email) throw new Error("Not logged in");
      const credential = EmailAuthProvider.credential(user.email, currentPassword);
      await reauthenticateWithCredential(user, credential);
      await updatePassword(user, newPassword);
      setSuccessMsg("Password changed successfully!");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (err) {
      if (err.code === "auth/wrong-password") {
        setErrorMsg("Current password is incorrect.");
      } else {
        setErrorMsg(err.message || "Failed to change password.");
      }
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4", children: /* @__PURE__ */ jsxs("div", { className: "w-full max-w-md rounded-2xl bg-white shadow-xl overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-5 py-4 border-b border-gray-100", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-base font-bold text-gray-900", children: "Account Settings" }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: onClose,
          className: "p-1.5 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors",
          children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex border-b border-gray-100", children: ["info", "password"].map((t) => /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => {
          setTab(t);
          clearMessages();
        },
        className: `flex-1 py-2.5 text-sm font-semibold transition-colors ${tab === t ? "text-[#8B0000] border-b-2 border-[#8B0000]" : "text-gray-400 hover:text-gray-600"}`,
        children: t === "info" ? "Basic Info" : "Change Password"
      },
      t
    )) }),
    /* @__PURE__ */ jsxs("div", { className: "p-5 space-y-4", children: [
      successMsg && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 rounded-lg bg-green-50 border border-green-200 px-3 py-2.5 text-sm text-green-700", children: [
        /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 shrink-0" }),
        successMsg
      ] }),
      errorMsg && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 rounded-lg bg-red-50 border border-red-200 px-3 py-2.5 text-sm text-red-700", children: [
        /* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4 shrink-0" }),
        errorMsg
      ] }),
      tab === "info" ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block", children: "Full Name" }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5 rounded-lg border border-gray-200 px-3 py-2.5 focus-within:border-[#8B0000] focus-within:ring-1 focus-within:ring-[#8B0000] transition-all", children: [
            /* @__PURE__ */ jsx(User, { className: "h-4 w-4 text-gray-400 shrink-0" }),
            isEditingName ? /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                value: name,
                onChange: (e) => setName(e.target.value),
                className: "flex-1 text-sm text-gray-900 bg-transparent outline-none",
                placeholder: "Your name",
                autoFocus: true
              }
            ) : /* @__PURE__ */ jsx("span", { className: "flex-1 text-sm text-gray-900", children: name || "No name set" }),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                onClick: () => setIsEditingName((v) => !v),
                className: "text-xs text-[#8B0000] font-semibold hover:underline shrink-0",
                children: isEditingName ? "Done" : "Change"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block", children: "Email Address" }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5 rounded-lg border border-gray-200 px-3 py-2.5 focus-within:border-[#8B0000] focus-within:ring-1 focus-within:ring-[#8B0000] transition-all", children: [
            /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4 text-gray-400 shrink-0" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "email",
                value: email,
                onChange: (e) => setEmail(e.target.value),
                className: "flex-1 text-sm text-gray-900 bg-transparent outline-none",
                placeholder: "your@email.com"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: handleSaveInfo,
            disabled: loading,
            className: "w-full py-2.5 rounded-lg bg-[#8B0000] text-white text-sm font-semibold hover:bg-[#6f0000] disabled:opacity-60 transition-colors",
            children: loading ? "Saving…" : "Save Changes"
          }
        )
      ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        [
          { label: "Current Password", value: currentPassword, set: setCurrentPassword, show: showCurrent, toggle: () => setShowCurrent((v) => !v) },
          { label: "New Password", value: newPassword, set: setNewPassword, show: showNew, toggle: () => setShowNew((v) => !v) },
          { label: "Confirm New Password", value: confirmPassword, set: setConfirmPassword, show: showConfirm, toggle: () => setShowConfirm((v) => !v) }
        ].map(({ label, value, set, show, toggle }) => /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block", children: label }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5 rounded-lg border border-gray-200 px-3 py-2.5 focus-within:border-[#8B0000] focus-within:ring-1 focus-within:ring-[#8B0000] transition-all", children: [
            /* @__PURE__ */ jsx(Lock, { className: "h-4 w-4 text-gray-400 shrink-0" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: show ? "text" : "password",
                value,
                onChange: (e) => set(e.target.value),
                className: "flex-1 text-sm text-gray-900 bg-transparent outline-none",
                placeholder: "••••••••"
              }
            ),
            /* @__PURE__ */ jsx("button", { type: "button", onClick: toggle, className: "text-gray-400 hover:text-gray-600", children: show ? /* @__PURE__ */ jsx(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(Eye, { className: "h-4 w-4" }) })
          ] })
        ] }, label)),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: handleChangePassword,
            disabled: loading,
            className: "w-full py-2.5 rounded-lg bg-[#8B0000] text-white text-sm font-semibold hover:bg-[#6f0000] disabled:opacity-60 transition-colors",
            children: loading ? "Updating…" : "Change Password"
          }
        )
      ] })
    ] })
  ] }) });
}
function DailySpendingLimit({ todaySpent, dailyLimit, transactions, onLimitChange }) {
  const [isEditingLimit, setIsEditingLimit] = useState(false);
  const [tempLimit, setTempLimit] = useState("");
  const remaining = dailyLimit - todaySpent;
  const percentageUsed = dailyLimit > 0 ? todaySpent / dailyLimit * 100 : 0;
  const isOverLimit = todaySpent > dailyLimit;
  const isNearLimit = percentageUsed > 80 && !isOverLimit;
  const isHalfway = percentageUsed > 50 && percentageUsed <= 80;
  const now = /* @__PURE__ */ new Date();
  const dayTotals = transactions.reduce((acc, t) => {
    const day = new Date(t.date).toDateString();
    acc[day] = (acc[day] || 0) + t.amount;
    return acc;
  }, {});
  const uniqueDays = Object.keys(dayTotals).length;
  const avgPerDay = uniqueDays > 0 ? Object.values(dayTotals).reduce((a, b) => a + b, 0) / uniqueDays : 0;
  const startOfWeek = new Date(now);
  startOfWeek.setDate(now.getDate() - (now.getDay() + 6) % 7);
  startOfWeek.setHours(0, 0, 0, 0);
  const thisWeekTotal = transactions.filter((t) => new Date(t.date) >= startOfWeek).reduce((sum, t) => sum + t.amount, 0);
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const thisMonthTotal = transactions.filter((t) => new Date(t.date) >= startOfMonth).reduce((sum, t) => sum + t.amount, 0);
  const handleSaveLimit = () => {
    const newLimit = parseFloat(tempLimit);
    if (!isNaN(newLimit) && newLimit > 0) {
      onLimitChange(newLimit);
      setIsEditingLimit(false);
    }
  };
  const handleCancel = () => {
    setIsEditingLimit(false);
    setTempLimit("");
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSaveLimit();
    if (e.key === "Escape") handleCancel();
  };
  const getBarColor = () => {
    if (isOverLimit) return "#ef4444";
    if (isNearLimit) return "#f59e0b";
    if (isHalfway) return "#eab308";
    return "#22c55e";
  };
  const remainingConfig = isOverLimit ? { color: "#dc2626", bg: "#fef2f2", border: "#fecaca" } : { color: "#16a34a", bg: "#f0fdf4", border: "#bbf7d0" };
  return /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-gray-200 bg-white p-5 shadow-sm h-80 flex flex-col justify-between", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between shrink-0", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-base font-bold text-gray-900", children: "Daily Spending Limit" }),
      !isEditingLimit && /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            setTempLimit(dailyLimit.toString());
            setIsEditingLimit(true);
          },
          className: "p-1.5 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors",
          children: /* @__PURE__ */ jsx(Edit2, { className: "h-3.5 w-3.5" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "shrink-0", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-1", children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-400 font-medium", children: "₱" }),
        /* @__PURE__ */ jsx("span", { className: "text-3xl font-bold text-gray-900 tracking-tight", children: todaySpent.toLocaleString("en-PH", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-400 mt-0.5", children: "spent today" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "shrink-0", children: /* @__PURE__ */ jsx("div", { className: "h-1.5 w-full bg-gray-100 rounded-full overflow-hidden", children: /* @__PURE__ */ jsx(
      "div",
      {
        className: "h-full rounded-full transition-all duration-500",
        style: { width: `${Math.min(percentageUsed, 100)}%`, backgroundColor: getBarColor() }
      }
    ) }) }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-2 shrink-0", children: [
      /* @__PURE__ */ jsxs("div", { className: `rounded-lg border px-3 py-2.5 transition-all duration-200 ${isEditingLimit ? "border-gray-300 bg-white shadow-sm ring-1 ring-gray-200" : "border-gray-100 bg-gray-50"}`, children: [
        /* @__PURE__ */ jsx("p", { className: "text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1", children: "Budget" }),
        isEditingLimit ? /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-gray-400", children: "₱" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "number",
                value: tempLimit,
                onChange: (e) => setTempLimit(e.target.value),
                onKeyDown: handleKeyDown,
                autoFocus: true,
                className: "\r\n                    w-full bg-transparent text-sm font-bold text-gray-900\r\n                    focus:outline-none\r\n                    [appearance:textfield]\r\n                    [&::-webkit-outer-spin-button]:appearance-none\r\n                    [&::-webkit-inner-spin-button]:appearance-none\r\n                  ",
                placeholder: "0"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: handleSaveLimit,
                className: "flex items-center gap-1 px-2 py-0.5 rounded-md bg-gray-900 text-white text-[10px] font-semibold hover:bg-gray-700 transition-colors",
                children: [
                  /* @__PURE__ */ jsx(Check, { className: "h-2.5 w-2.5" }),
                  "Save"
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: handleCancel,
                className: "flex items-center gap-1 px-2 py-0.5 rounded-md border border-gray-200 text-gray-500 text-[10px] font-semibold hover:bg-gray-50 transition-colors",
                children: [
                  /* @__PURE__ */ jsx(X, { className: "h-2.5 w-2.5" }),
                  "Cancel"
                ]
              }
            )
          ] })
        ] }) : /* @__PURE__ */ jsxs("p", { className: "text-sm font-bold text-gray-800", children: [
          "₱",
          dailyLimit.toLocaleString("en-PH", { minimumFractionDigits: 2 })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "rounded-lg px-3 py-2.5 border",
          style: { background: remainingConfig.bg, borderColor: remainingConfig.border },
          children: [
            /* @__PURE__ */ jsx("p", { className: "text-[10px] font-semibold uppercase tracking-wider mb-1", style: { color: remainingConfig.color, opacity: 0.7 }, children: "Remaining" }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxs("p", { className: "text-sm font-bold", style: { color: remainingConfig.color }, children: [
                isOverLimit ? "−" : "",
                "₱",
                Math.abs(remaining).toLocaleString("en-PH", { maximumFractionDigits: 0 })
              ] }),
              isOverLimit ? /* @__PURE__ */ jsx(TrendingUp, { className: "h-3.5 w-3.5", style: { color: remainingConfig.color } }) : /* @__PURE__ */ jsx(TrendingDown, { className: "h-3.5 w-3.5", style: { color: remainingConfig.color } })
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-2 pt-3 border-t border-gray-100 shrink-0", children: [
      { label: "Avg / Day", value: `₱${avgPerDay.toLocaleString("en-PH", { maximumFractionDigits: 0 })}` },
      { label: "This Week", value: `₱${thisWeekTotal.toLocaleString("en-PH", { maximumFractionDigits: 0 })}` },
      { label: "This Month", value: `₱${thisMonthTotal.toLocaleString("en-PH", { maximumFractionDigits: 0 })}` }
    ].map(({ label, value }) => /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("p", { className: "text-[10px] text-gray-400 uppercase tracking-wide mb-0.5", children: label }),
      /* @__PURE__ */ jsx("p", { className: "text-xs font-bold text-gray-700", children: value })
    ] }, label)) })
  ] });
}
function SpendingStats({ transactions, dailyLimit }) {
  var _a;
  const now = /* @__PURE__ */ new Date();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const monthlyTotal = transactions.filter((t) => new Date(t.date) >= startOfMonth).reduce((sum, t) => sum + t.amount, 0);
  const dayTotals = transactions.filter((t) => new Date(t.date) >= startOfMonth).reduce((acc, t) => {
    const day = new Date(t.date).toDateString();
    acc[day] = (acc[day] || 0) + t.amount;
    return acc;
  }, {});
  const daysOverLimit = Object.values(dayTotals).filter((total) => total > dailyLimit).length;
  const highestPurchase = transactions.length > 0 ? Math.max(...transactions.map((t) => t.amount)) : 0;
  const itemCounts = transactions.reduce((acc, t) => {
    if (t.item) acc[t.item] = (acc[t.item] || 0) + 1;
    return acc;
  }, {});
  const topItem = ((_a = Object.entries(itemCounts).sort((a, b) => b[1] - a[1])[0]) == null ? void 0 : _a[0]) || "—";
  const stats = [
    {
      label: "Total This Month",
      value: `₱${monthlyTotal.toLocaleString("en-PH", { maximumFractionDigits: 0 })}`,
      icon: TrendingUp,
      color: "#8B0000",
      bg: "#fff1f1"
    },
    {
      label: "Days Over Limit",
      value: daysOverLimit === 0 ? "None 🎉" : `${daysOverLimit} day${daysOverLimit > 1 ? "s" : ""}`,
      icon: AlertTriangle,
      color: daysOverLimit > 0 ? "#d97706" : "#16a34a",
      bg: daysOverLimit > 0 ? "#fffbeb" : "#f0fdf4"
    },
    {
      label: "Highest Purchase",
      value: `₱${highestPurchase.toLocaleString("en-PH", { maximumFractionDigits: 0 })}`,
      icon: ShoppingBag,
      color: "#4f46e5",
      bg: "#eef2ff"
    },
    {
      label: "Most Bought",
      value: topItem.length > 12 ? topItem.slice(0, 12) + "…" : topItem,
      icon: Star,
      color: "#0891b2",
      bg: "#ecfeff"
    }
  ];
  return /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-2", children: stats.map(({ label, value, icon: Icon, color, bg }) => /* @__PURE__ */ jsxs(
    "div",
    {
      className: "rounded-xl border border-gray-100 p-3 flex items-center gap-2.5 h-16",
      style: { background: bg },
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "rounded-lg p-1.5 shrink-0",
            style: { background: color + "18" },
            children: /* @__PURE__ */ jsx(Icon, { className: "h-3.5 w-3.5", style: { color } })
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsx("p", { className: "text-[10px] text-gray-400 uppercase tracking-wide leading-tight mb-0.5", children: label }),
          /* @__PURE__ */ jsx("p", { className: "text-sm font-bold text-gray-800 truncate", children: value })
        ] })
      ]
    },
    label
  )) });
}
const RANGES = [
  { label: "7D", days: 7 },
  { label: "14D", days: 14 },
  { label: "30D", days: 30 }
];
function SpendingTrend({ transactions, dailyLimit }) {
  const [range, setRange] = useState(7);
  const days = Array.from({ length: range }, (_, i) => {
    const d = /* @__PURE__ */ new Date();
    d.setDate(d.getDate() - (range - 1 - i));
    d.setHours(0, 0, 0, 0);
    return d;
  });
  const dayTotals = days.map((day) => {
    const dayStr = day.toDateString();
    const total = transactions.filter((t) => new Date(t.date).toDateString() === dayStr).reduce((sum, t) => sum + t.amount, 0);
    const label = range === 7 ? day.toLocaleDateString("en-PH", { weekday: "short" }) : day.toLocaleDateString("en-PH", { month: "short", day: "numeric" });
    return {
      label,
      total,
      isToday: day.toDateString() === (/* @__PURE__ */ new Date()).toDateString()
    };
  });
  const maxValue = Math.max(...dayTotals.map((d) => d.total), dailyLimit, 1);
  const showLabel = (i) => {
    if (range <= 14) return true;
    return i === 0 || i === range - 1 || i % 5 === 0;
  };
  return /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-gray-200 bg-white p-5 shadow-sm", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-base font-bold text-gray-900", children: "Spending Trend" }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1 bg-gray-100 rounded-lg p-0.5", children: RANGES.map((r) => /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setRange(r.days),
          className: `px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all ${range === r.days ? "bg-white text-gray-900 shadow-sm" : "text-gray-400 hover:text-gray-600"}`,
          children: r.label
        },
        r.label
      )) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-[10px] text-gray-400 uppercase tracking-wide mb-3", children: [
      /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsx("span", { className: "inline-block w-2.5 h-2.5 rounded-sm bg-[#8B0000]" }),
        " Spent"
      ] }),
      /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsx("span", { className: "inline-block w-2.5 h-0.5 bg-amber-400" }),
        " Limit"
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute left-0 right-0 border-t border-dashed border-amber-400 z-10",
          style: { bottom: `${dailyLimit / maxValue * 100}%` },
          children: /* @__PURE__ */ jsxs("span", { className: "absolute -top-3.5 right-0 text-[9px] font-semibold text-amber-500", children: [
            "₱",
            dailyLimit.toLocaleString("en-PH", { maximumFractionDigits: 0 })
          ] })
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "flex items-end justify-between gap-0.5 h-28", children: dayTotals.map(({ label, total, isToday }, i) => {
        const heightPct = maxValue > 0 ? total / maxValue * 100 : 0;
        const isOver = total > dailyLimit;
        const barColor = isOver ? "#ef4444" : isToday ? "#8B0000" : "#c4b5b5";
        return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-1 flex-1 min-w-0", children: [
          /* @__PURE__ */ jsx("div", { className: "w-full flex items-end justify-center", style: { height: "100%" }, children: /* @__PURE__ */ jsx(
            "div",
            {
              className: "w-full rounded-t-sm transition-all duration-500 relative group",
              style: {
                height: total > 0 ? `${Math.max(heightPct, 4)}%` : "4%",
                backgroundColor: barColor,
                opacity: total > 0 ? 1 : 0.15
              },
              children: total > 0 && /* @__PURE__ */ jsxs("div", { className: "absolute -top-7 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[9px] font-semibold px-1.5 py-0.5 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-20", children: [
                "₱",
                total.toLocaleString("en-PH", { maximumFractionDigits: 0 })
              ] })
            }
          ) }),
          /* @__PURE__ */ jsx("span", { className: `text-[9px] font-medium truncate w-full text-center ${isToday ? "text-[#8B0000] font-bold" : "text-gray-400"} ${!showLabel(i) ? "invisible" : ""}`, children: label })
        ] }, i);
      }) })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-[10px] text-gray-400 mt-3", children: "Red bars = over daily limit · Darker bar = today" })
  ] });
}
const parentDashboard = withComponentProps(function ParentDashboard() {
  var _a;
  const [currentTime, setCurrentTime] = useState("");
  const [studentData, setStudentData] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [showTopUpModal, setShowTopUpModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showNotificationDetails, setShowNotificationDetails] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [showActivityFilter, setShowActivityFilter] = useState(false);
  const [activityFilter, setActivityFilter] = useState("all");
  const [notifications, setNotifications] = useState([]);
  const [recentActivity, setRecentActivity] = useState([]);
  const [todaySpent, setTodaySpent] = useState(0);
  const [dailyLimit, setDailyLimit] = useState(100);
  const [showFloatingTopUp, setShowFloatingTopUp] = useState(false);
  const topUpCardRef = useRef(null);
  const paymentMethods = [{
    id: "cash",
    name: "Cash",
    icon: "💵"
  }, {
    id: "gcash",
    name: "GCash",
    icon: "🔵"
  }, {
    id: "paymaya",
    name: "PayMaya",
    icon: "🟢"
  }, {
    id: "gotyme",
    name: "GoTyme",
    icon: "🏹"
  }];
  useEffect(() => {
    const updateTime = () => {
      const now = /* @__PURE__ */ new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      const displayHours = hours % 12 || 12;
      const displayMinutes = minutes.toString().padStart(2, "0");
      setCurrentTime(`${displayHours}:${displayMinutes} ${ampm}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 6e4);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) return;
      const q = query(collection(db, "students"), where("guardianId", "==", user.uid));
      const studentUnsubscribe = onSnapshot(q, (snapshot) => {
        if (!snapshot.empty) {
          const docSnap = snapshot.docs[0];
          setStudentData({
            id: docSnap.id,
            ...docSnap.data()
          });
        }
      });
      return () => studentUnsubscribe();
    });
    return () => unsubscribe();
  }, []);
  useEffect(() => {
    var _a2;
    if (!(studentData == null ? void 0 : studentData.id)) return;
    const txnUnsubscribe = onSnapshot(query(collection(db, "transactions"), where("studentId", "==", studentData.id), orderBy("timestamp", "desc")), (snapshot) => {
      console.log("📦 Transactions found:", snapshot.docs.length);
      const txns = snapshot.docs.map((doc2) => ({
        id: doc2.id,
        ...doc2.data()
      }));
      const newNotifications = txns.slice(0, 5).map((txn) => {
        var _a3;
        return {
          id: txn.id,
          type: "purchase",
          title: "Purchase Alert",
          description: `Bought: ${((_a3 = txn.items) == null ? void 0 : _a3.map((i) => i.name).join(", ")) || "Item"}`,
          amount: -txn.total,
          icon: "purchase",
          timestamp: new Date(txn.timestamp).toLocaleTimeString("en-PH", {
            hour: "2-digit",
            minute: "2-digit"
          })
        };
      });
      setNotifications((prev) => {
        const topupNotifs = prev.filter((n) => n.title.includes("Top-Up"));
        return [...topupNotifs, ...newNotifications].slice(0, 5);
      });
      const newActivity = txns.slice(0, 10).map((txn) => {
        var _a3, _b, _c;
        const ts = ((_b = (_a3 = txn.timestamp) == null ? void 0 : _a3.toDate) == null ? void 0 : _b.call(_a3)) ?? new Date(txn.timestamp);
        return {
          id: txn.id,
          item: ((_c = txn.items) == null ? void 0 : _c.map((i) => i.name).join(", ")) || "Purchase",
          items: txn.items || [],
          date: ts.toLocaleDateString("en-PH", {
            month: "short",
            day: "numeric"
          }),
          rawDate: ts.toISOString(),
          time: ts.toLocaleTimeString("en-PH", {
            hour: "2-digit",
            minute: "2-digit"
          }),
          amount: -txn.total,
          type: "expense",
          category: "Food & Drinks"
        };
      });
      setRecentActivity(newActivity);
    }, (error) => {
      console.error("❌ Firestore error:", error);
    });
    const topupUnsubscribe = onSnapshot(query(collection(db, "topup_requests"), where("guardianId", "==", (_a2 = auth.currentUser) == null ? void 0 : _a2.uid), orderBy("timestamp", "desc")), (snapshot) => {
      const topupNotifs = snapshot.docs.filter((doc2) => doc2.data().status !== "pending").map((doc2) => ({
        id: doc2.id,
        type: "warning",
        title: doc2.data().status === "approved" ? "Top-Up Approved ✅" : "Top-Up Rejected ❌",
        description: doc2.data().status === "approved" ? `₱${doc2.data().amount} has been added to the wallet` : `Your top-up of ₱${doc2.data().amount} was rejected`,
        amount: doc2.data().status === "approved" ? doc2.data().amount : void 0,
        icon: "warning",
        timestamp: new Date(doc2.data().timestamp).toLocaleTimeString("en-PH", {
          hour: "2-digit",
          minute: "2-digit"
        })
      }));
      setNotifications((prev) => {
        const txnNotifs = prev.filter((n) => n.title === "Purchase Alert");
        return [...topupNotifs, ...txnNotifs].slice(0, 5);
      });
    });
    return () => {
      txnUnsubscribe();
      topupUnsubscribe();
    };
  }, [studentData == null ? void 0 : studentData.id]);
  useEffect(() => {
    if (!(studentData == null ? void 0 : studentData.id)) return;
    if (studentData.dailyLimit) setDailyLimit(studentData.dailyLimit);
    const startOfToday = /* @__PURE__ */ new Date();
    startOfToday.setHours(0, 0, 0, 0);
    const startTimestamp = startOfToday.getTime();
    const spendingUnsubscribe = onSnapshot(query(collection(db, "transactions"), where("studentId", "==", studentData.id), where("timestamp", ">=", startTimestamp), orderBy("timestamp", "asc")), (snapshot) => {
      const total = snapshot.docs.reduce((sum, doc2) => sum + (doc2.data().total || 0), 0);
      setTodaySpent(total);
    });
    return () => spendingUnsubscribe();
  }, [studentData == null ? void 0 : studentData.id, studentData == null ? void 0 : studentData.dailyLimit]);
  useEffect(() => {
    const el = topUpCardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry2]) => setShowFloatingTopUp(!entry2.isIntersecting), {
      threshold: 0
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  const handleLimitChange = async (newLimit) => {
    setDailyLimit(newLimit);
    if (studentData == null ? void 0 : studentData.id) {
      await updateDoc(doc(db, "students", studentData.id), {
        dailyLimit: newLimit
      });
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("role");
    window.location.href = "/";
  };
  const handleTopUpRequest = async (modalAmount, referenceNumber) => {
    var _a2;
    if (!studentData || !modalAmount || !referenceNumber) {
      alert("Please fill in all details, including the Reference Number.");
      return;
    }
    try {
      await addDoc(collection(db, "topup_requests"), {
        studentId: studentData.id || studentData.studentId,
        studentName: studentData.name,
        guardianId: (_a2 = auth.currentUser) == null ? void 0 : _a2.uid,
        amount: parseFloat(modalAmount),
        referenceNo: referenceNumber,
        status: "pending",
        paymentMethod: "GCash",
        timestamp: Date.now()
      });
      alert("Ticket Submitted! Please wait for the Admin to verify your Reference Number.");
      setShowTopUpModal(false);
    } catch (error) {
      console.error("Error sending request:", error);
      alert("Failed to send request. Check console.");
    }
  };
  const handleShare = () => {
    const text = `EduTap Balance: ₱${(studentData == null ? void 0 : studentData.balance.toFixed(2)) || "0.00"}`;
    if (navigator.share) {
      navigator.share({
        title: "EduTap",
        text,
        url: window.location.href
      });
    }
  };
  const filteredActivity = recentActivity.filter((activity) => {
    if (activityFilter === "all") return true;
    return activity.type === activityFilter;
  });
  const transactions = recentActivity.map((a) => ({
    amount: Math.abs(a.amount),
    date: a.rawDate,
    item: a.item
  }));
  return /* @__PURE__ */ jsxs("div", {
    className: "flex h-screen flex-col bg-gray-50",
    children: [showSuccessMessage && /* @__PURE__ */ jsxs("div", {
      className: "fixed top-4 right-4 z-50 flex items-center gap-2 rounded-lg bg-green-500 px-4 py-3 text-white shadow-lg",
      children: [/* @__PURE__ */ jsx(Check, {
        className: "h-5 w-5"
      }), /* @__PURE__ */ jsx("span", {
        children: "Top-up successful!"
      })]
    }), /* @__PURE__ */ jsx(ParentHeader, {
      username: (studentData == null ? void 0 : studentData.name) || "Parent",
      currentTime,
      onShare: handleShare,
      onLogout: handleLogout,
      onSettingsClick: () => setShowSettingsModal(true)
    }), /* @__PURE__ */ jsxs("div", {
      className: "flex flex-1 overflow-hidden flex-col lg:flex-row",
      children: [/* @__PURE__ */ jsxs("div", {
        className: "flex-1 overflow-y-auto p-3 sm:p-6 pb-24 lg:pb-6",
        children: [/* @__PURE__ */ jsxs("div", {
          ref: topUpCardRef,
          className: "lg:hidden mb-4 rounded-xl bg-[#8B0000] p-4 text-white",
          children: [/* @__PURE__ */ jsxs("p", {
            className: "text-xs opacity-75 mb-1",
            children: [(studentData == null ? void 0 : studentData.name) || "Student", "'s Wallet"]
          }), /* @__PURE__ */ jsxs("p", {
            className: "text-3xl font-bold",
            children: ["₱", ((studentData == null ? void 0 : studentData.balance) || 0).toFixed(2)]
          }), /* @__PURE__ */ jsx("p", {
            className: "text-xs opacity-75 mt-1",
            children: "Last updated just now"
          }), /* @__PURE__ */ jsx("button", {
            onClick: () => setShowTopUpModal(true),
            className: "mt-3 w-full rounded-lg bg-white py-2 text-sm font-semibold text-[#8B0000] hover:bg-gray-100",
            children: "Top Up Wallet"
          })]
        }), /* @__PURE__ */ jsxs("div", {
          className: "grid grid-cols-1 gap-4 lg:grid-cols-2",
          children: [/* @__PURE__ */ jsxs("div", {
            className: "space-y-4",
            children: [/* @__PURE__ */ jsx(Notifications, {
              notifications,
              onNotificationClick: (n) => {
                setSelectedNotification(n);
                setShowNotificationDetails(true);
              },
              onClearAll: () => setNotifications([])
            }), /* @__PURE__ */ jsx(RecentActivity, {
              activities: filteredActivity,
              onDownloadClick: () => alert("Report downloaded!")
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "space-y-4",
            children: [/* @__PURE__ */ jsx(DailySpendingLimit, {
              todaySpent,
              dailyLimit,
              transactions,
              onLimitChange: handleLimitChange
            }), /* @__PURE__ */ jsx(SpendingStats, {
              transactions,
              dailyLimit
            }), /* @__PURE__ */ jsx(SpendingTrend, {
              transactions,
              dailyLimit
            })]
          })]
        })]
      }), /* @__PURE__ */ jsx("div", {
        className: "hidden lg:block lg:w-80 xl:w-96 border-l border-gray-200",
        children: /* @__PURE__ */ jsx(BalanceSidebar, {
          balance: (studentData == null ? void 0 : studentData.balance) || 0,
          paymentMethods,
          selectedPayment,
          onPaymentSelect: setSelectedPayment,
          onTopUpClick: () => setShowTopUpModal(true)
        })
      })]
    }), showFloatingTopUp && /* @__PURE__ */ jsxs("button", {
      onClick: () => setShowTopUpModal(true),
      className: "lg:hidden fixed bottom-6 right-5 z-50 flex items-center gap-2 bg-[#8B0000] text-white text-sm font-semibold px-5 py-3 rounded-full shadow-xl active:scale-95 transition-transform",
      children: [/* @__PURE__ */ jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-4 w-4",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [/* @__PURE__ */ jsx("line", {
          x1: "12",
          y1: "5",
          x2: "12",
          y2: "19"
        }), /* @__PURE__ */ jsx("line", {
          x1: "5",
          y1: "12",
          x2: "19",
          y2: "12"
        })]
      }), "Top Up"]
    }), /* @__PURE__ */ jsx(TopUpModal, {
      isOpen: showTopUpModal,
      onClose: () => setShowTopUpModal(false),
      onSubmit: handleTopUpRequest
    }), showSettingsModal && /* @__PURE__ */ jsx(SettingsModal, {
      isOpen: showSettingsModal,
      onClose: () => setShowSettingsModal(false),
      currentName: (studentData == null ? void 0 : studentData.name) || "",
      currentEmail: ((_a = auth.currentUser) == null ? void 0 : _a.email) || "",
      studentId: (studentData == null ? void 0 : studentData.id) || ""
    }), /* @__PURE__ */ jsx(ActivityFilterModal, {
      isOpen: showActivityFilter,
      currentFilter: activityFilter,
      onClose: () => setShowActivityFilter(false),
      onSelectFilter: setActivityFilter
    })]
  });
});
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: parentDashboard
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-CrHes0rY.js", "imports": ["/assets/chunk-KNED5TY2-BWNdqSdz.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/assets/root-DAWi4uMI.js", "imports": ["/assets/chunk-KNED5TY2-BWNdqSdz.js", "/assets/with-props-D3AO8slx.js"], "css": ["/assets/root-MU0viRhx.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/login-page": { "id": "routes/login-page", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/login-page-fLCKnTq5.js", "imports": ["/assets/with-props-D3AO8slx.js", "/assets/chunk-KNED5TY2-BWNdqSdz.js", "/assets/firebase-CXxbqXZL.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/parent-dashboard": { "id": "routes/parent-dashboard", "parentId": "root", "path": "/parent-dashboard", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/parent-dashboard-ccGagMXk.js", "imports": ["/assets/with-props-D3AO8slx.js", "/assets/chunk-KNED5TY2-BWNdqSdz.js", "/assets/firebase-CXxbqXZL.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-ddde71b2.js", "version": "ddde71b2", "sri": void 0 };
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "unstable_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_subResourceIntegrity": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/login-page": {
    id: "routes/login-page",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  },
  "routes/parent-dashboard": {
    id: "routes/parent-dashboard",
    parentId: "root",
    path: "/parent-dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routes,
  ssr
};
