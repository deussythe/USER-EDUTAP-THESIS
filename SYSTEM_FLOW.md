# EduTap System Flow Diagram

## 1. HIGH-LEVEL ARCHITECTURE OVERVIEW

```
┌─────────────────────────────────────────────────────────────────┐
│                    React Router 7 (Frontend)                    │
│              Vite + TypeScript + Tailwind CSS                   │
└─────────────────────────────────────────────────────────────────┘
                              │
                    ┌─────────┴─────────┐
                    │                   │
            ┌───────▼──────────┐   ┌────▼─────────────┐
            │  Firebase Auth   │   │  Firestore DB   │
            │  (email/password)│   │  (Real-time)    │
            └───────┬──────────┘   └────┬─────────────┘
                    │                   │
            ┌───────▼──────────────────▼────────────┐
            │   API Backend                        │
            │   (Node/Express - localhost:3000)    │
            └──────────────────────────────────────┘
```

---

## 2. LOGIN FLOW (Starting Point)

```
┌─────────────────────────────────────────────────────────────────┐
│                         APP STARTUP                             │
│                    (root.tsx → Outlet)                          │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│              LOGIN PAGE (/login-page.tsx)                       │
│                                                                 │
│  ┌────────────────────────────────────────────────────────┐    │
│  │  Login Form (UI Component)                             │    │
│  ├────────────────────────────────────────────────────────┤    │
│  │  📧 Email Input Field                                  │    │
│  │  🔑 Password Input Field                               │    │
│  │  🔘 Login Button                                       │    │
│  │  🔗 "Forgot Password?" Link                            │    │
│  │  🏢 Organization Branding (Logo, Colors)              │    │
│  └────────────────────────────────────────────────────────┘    │
│                                                                 │
│  ACTIONS:                                                       │
│  • User enters email & password                                │
│  • Click "Login" button                                        │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         ▼
            ┌────────────────────────────┐
            │  Firebase Authentication   │
            │  signInWithEmailAndPassword│
            └────────────┬───────────────┘
                         │
        ┌────────────────┴────────────────┐
        │                                 │
        ▼ SUCCESS                    FAILURE ▼
   ┌─────────────┐              ┌─────────────────┐
   │ Auth Token  │              │ Error Message   │
   │  Received   │              │ Display & Stay  │
   └────────┬────┘              │  on Login Page  │
            │                   └─────────────────┘
            ▼
   ┌────────────────────────┐
   │ Query Firestore users  │
   │ collection for user    │
   │ with matching email    │
   └────────────┬───────────┘
                │
                ▼
    ┌──────────────────────────────────┐
    │ Extract User Role & Org Data     │
    │ (role, personId, organization)  │
    └──────────┬───────────────────────┘
               │
               ▼
    ┌──────────────────────────────────────────────────┐
    │      ROLE-BASED ROUTING (Critical Branch)        │
    └──────────────┬───────────────────────────────────┘
                   │
        ┌──────────┼──────────┐
        │          │          │
    role=admin │   role=parent│  role=staff
        ▼      │      ▼       │     ▼
    ❌ NOT    │ ✅ IMPL      │  ❌ NOT
    IMPL      │              │  IMPL
    /admin-   │ /parent-      │  /pos
    panel     │ dashboard     │
              │              │
```

---

## 3. PASSWORD RESET FLOW (Alternative from Login)

```
LOGIN PAGE
    │
    ├─ "Forgot Password?" Link
    │
    ▼
┌──────────────────────────────────────────┐
│  Password Reset Page (/reset-password)   │
│                                          │
│  • Email confirmation link from Firebase │
│  • Verify password reset token           │
│  • New password input                    │
│  • Confirm password input                │
└──────────┬───────────────────────────────┘
           │
           ▼
   ┌──────────────────────────────┐
   │ Firebase verifyPasswordReset │
   │ Code & confirmPasswordReset  │
   └──────────┬───────────────────┘
              │
              ▼
      ✅ Password Updated
              │
              ▼
      Return to Login
```

---

## 4. PARENT DASHBOARD FLOW (Fully Implemented)

```
┌─────────────────────────────────────────────────────────────────┐
│           PARENT DASHBOARD (/parent-dashboard.tsx)              │
│                                                                 │
│  Entry Requirements:                                            │
│  ✓ User authenticated                                           │
│  ✓ User role = "parent"                                         │
│  ✓ Organization data loaded                                     │
└────────────────┬────────────────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────────────────────┐
│           AuthContext Initialization                            │
│                                                                 │
│  • User state loaded from localStorage                          │
│  • Organization branding applied (CSS variables)                │
│  • 6 Parallel Firestore Listeners Started:                      │
│    1. Student data (by guardianId)                              │
│    2. Transactions (real-time purchases)                        │
│    3. Top-up requests (approval status)                         │
│    4. Today's spending (24-hour window)                         │
│    5. Notifications (limit violations)                          │
│    6. Payment settings (QR codes)                               │
└─────────────────┬───────────────────────────────────────────────┘
                  │
        ┌─────────┴─────────┐
        │                   │
        ▼ DATA READY        ▼
                    Dashboard renders 6 main sections
```

---

## 5. PARENT DASHBOARD - UI LAYOUT & COMPONENTS

```
┌─────────────────────────────────────────────────────────────────┐
│                        HEADER SECTION                           │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ 🏢 Logo | 📱 Responsive Menu | 🕐 Time | ⚙️ Settings   │   │
│  │ Student Name | School Info | Share | Logout            │   │
│  └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                              │
              ┌───────────────┼───────────────┐
              │               │               │
              ▼               ▼               ▼
    ┌──────────────┐  ┌──────────────┐  ┌──────────────┐
    │   SIDEBAR    │  │   MAIN       │  │   RIGHT      │
    │ (Desktop)    │  │   CONTENT    │  │   SIDEBAR    │
    │              │  │              │  │              │
    │ • Balance    │  │ • Spending   │  │ • Recent     │
    │   Display    │  │   Limit      │  │   Activity   │
    │ • Payment    │  │   (Progress  │  │ • Date       │
    │   Methods    │  │    Bar)      │  │   Filter     │
    │ • QR Code    │  │ • Spending   │  │ • Calendar   │
    │   for Top-Up │  │   Trend Chart│  │              │
    │ • Top-Up Btn │  │ • Stat Cards │  │              │
    │              │  │   (4-tile)   │  │              │
    │              │  │ • Settings   │  │              │
    └──────────────┘  │   Link       │  └──────────────┘
                      └──────────────┘
```

---

## 6. PARENT DASHBOARD - COMPONENT HIERARCHY

```
parent-dashboard.tsx (Main Page)
    │
    ├─ parent-header.tsx
    │   ├─ Logo & Navigation
    │   ├─ Student Info Display
    │   ├─ Time Display
    │   ├─ Settings Button
    │   ├─ Share Button
    │   └─ Logout Button
    │
    ├─ balance-sidebar.tsx (Desktop only)
    │   ├─ Wallet Balance Display (₱ amount)
    │   ├─ Payment Methods
    │   ├─ QR Code Display
    │   └─ Top-Up Button → Opens topup-modal
    │
    ├─ [MAIN CONTENT AREA]
    │   │
    │   ├─ daily-spending-limit.tsx
    │   │   ├─ Progress Bar (0-100%)
    │   │   ├─ Limit Value (₱)
    │   │   ├─ Today's Spent Amount
    │   │   ├─ Edit Button → settings-modal
    │   │   └─ Status Indicators
    │   │       ├─ Days Over Limit (stat)
    │   │       ├─ Highest Purchase (stat)
    │   │       └─ Most Bought Item (stat)
    │   │
    │   ├─ spending-trend.tsx
    │   │   ├─ Line/Bar Chart
    │   │   ├─ Weekly/Monthly Toggle
    │   │   └─ Trend Analysis
    │   │
    │   └─ spending-stats.tsx
    │       ├─ Stat Card 1: Limit Hit Count
    │       ├─ Stat Card 2: Days Over Limit
    │       ├─ Stat Card 3: Highest Purchase
    │       └─ Stat Card 4: Most Bought Item
    │
    └─ [RIGHT SIDEBAR]
        │
        ├─ recent-activity.tsx
        │   ├─ Transaction List
        │   │   ├─ Date Grouping
        │   │   ├─ Purchase Items
        │   │   ├─ Amount
        │   │   └─ Time
        │   │
        │   ├─ Filter Button → activity-filter-modal
        │   │
        │   └─ Calendar/Date Filter
        │
        └─ notifications.tsx
            ├─ Notification List
            │   ├─ Purchase Alerts
            │   ├─ Limit Exceeded Warnings
            │   ├─ Top-Up Status (approved/rejected)
            │   ├─ Purchase Blocked Alerts
            │   └─ Timestamp
            │
            └─ Mark as Read / Delete
                └─ notification-details-modal on click
```

---

## 7. MODAL FLOWS (User Actions)

### 7A. TOP-UP MODAL FLOW

```
User clicks "Top Up" button (in sidebar or header)
    │
    ▼
┌─────────────────────────────────────┐
│      TOP-UP MODAL                   │
│  (topup-modal.tsx)                  │
│                                     │
│  ┌───────────────────────────────┐  │
│  │ QR Code Display               │  │
│  │ (From Firestore settings)     │  │
│  └───────────────────────────────┘  │
│                                     │
│  Amount Selection:                  │
│  • 🔘 Quick Buttons: 50, 100, 200   │
│  • 🔘 Custom Amount Input           │
│                                     │
│  Reference Number Input:            │
│  (From GCash/E-Wallet transaction)  │
│                                     │
│  Submit Button                      │
└────────────┬────────────────────────┘
             │
             ▼
  ┌──────────────────────────┐
  │ Save to Firestore        │
  │ topup_requests collection│
  │ Status: "pending"        │
  └────────────┬─────────────┘
               │
               ▼
     ┌─────────────────────┐
     │ Notify Admin Panel  │
     │ New top-up request  │
     │ Awaiting approval   │
     └──────────┬──────────┘
                │
    ┌───────────┴───────────┐
    │                       │
    ▼ (Admin approves)  ADMIN ACTION ▼
┌────────────────────┐  (Admin rejects)
│ Update student     │  │
│ balance + ₱amount  │  │
│ Status: approved   │  │
└────────────┬───────┘  │
             │          │
             ▼       ┌──▼────────────────┐
        ✅ APPROVED  │ Keep balance same │
             │       │ Status: rejected  │
             │       └──────────────────┘
             │                 │
             ▼                 ▼
    Notification sent:  Notification sent:
    "Top-up approved   "Top-up rejected"
     ₱XXX added"       Contact admin
    
    Parent sees:
    ✓ Balance updated
    ✓ Success message
    ✓ Transaction recorded
```

### 7B. SETTINGS MODAL FLOW

```
User clicks Settings Button
    │
    ▼
┌────────────────────────────────────────┐
│      SETTINGS MODAL                    │
│  (settings-modal.tsx)                  │
│                                        │
│  3 Tabs:                               │
│  ┌──────────────────────────────────┐  │
│  │ 1. STUDENT INFO                  │  │
│  │    • Name (read-only)            │  │
│  │    • Grade Level (dropdown)      │  │
│  │    • LRN (editable)              │  │
│  │    • School Email (editable)     │  │
│  │    • School Name (read-only)     │  │
│  │    • Photo (upload option)       │  │
│  ├──────────────────────────────────┤  │
│  │ 2. GUARDIAN INFO                 │  │
│  │    • Full Name (editable)        │  │
│  │    • Email (editable)            │  │
│  │    • Contact Number (editable)   │  │
│  │    • Relationship (dropdown)     │  │
│  ├──────────────────────────────────┤  │
│  │ 3. PASSWORD                      │  │
│  │    • Current Password (input)    │  │
│  │    • New Password (input)        │  │
│  │    • Confirm Password (input)    │  │
│  │    • Change Password Button      │  │
│  └──────────────────────────────────┘  │
│                                        │
│  Save Button | Cancel Button           │
└────────────┬─────────────────────────────┘
             │
    ┌────────┴────────┐
    │                 │
    ▼ (Save changes)  ▼ (Cancel)
Updates sent        Close modal
to Firestore        No changes
    │
    ▼
✅ Success message
   displayed
```

### 7C. ACTIVITY FILTER MODAL FLOW

```
User clicks Filter icon (in Recent Activity)
    │
    ▼
┌──────────────────────────────────────┐
│  ACTIVITY FILTER MODAL               │
│  (activity-filter-modal.tsx)         │
│                                      │
│  Date Range Selection:               │
│  • 📅 From Date (picker)             │
│  • 📅 To Date (picker)               │
│                                      │
│  Transaction Type Filter:            │
│  • ☑️ All Transactions               │
│  • ☑️ Expenses (purchases)           │
│  • ☑️ Income (refunds/credits)       │
│                                      │
│  Apply Button | Reset Button         │
└──────────────┬───────────────────────┘
               │
    ┌──────────┴──────────┐
    │                     │
    ▼ (Apply)        ▼ (Reset)
Firestore query   Clear all filters
filtered by:      Show all
• Date range      transactions
• Type
    │
    ▼
Recent Activity refreshes
with filtered results
```

---

## 8. REAL-TIME DATA FLOW & FIRESTORE LISTENERS

```
FIRESTORE COLLECTIONS & REAL-TIME UPDATES

┌───────────────────────────────────────────────────────────────┐
│                      FIRESTORE DATABASE                       │
└────────────┬────────────────────────────────────────────────┬─┘
             │                                                │
    ┌────────▼────────┐                                  ┌────▼─────────┐
    │  STUDENTS       │                                  │  TRANSACTIONS│
    │  Collection     │                                  │  Collection  │
    │                 │                                  │              │
    │ Doc: lrn123     │                                  │ Doc: trans001│
    │ ├─ name         │                                  │ ├─ lrn123    │
    │ ├─ guardianId   │◄─┐                              │ ├─ items[]   │
    │ ├─ grade        │  │ Link                          │ ├─ total     │
    │ ├─ balance ₱xxx │  │                              │ ├─ timestamp │
    │ ├─ dailyLimit ₱ │  │                              │ └─ status    │
    │ ├─ photoUrl     │  │                              │              │
    │ ├─ schoolEmail  │  │  Real-time    ┌──────────────┤              │
    │ └─ schoolName   │  └──────────────►│  PARENT      │ [New purchase]
    │                 │                  │  DASHBOARD   │              │
    └─────────────────┘                  │  LISTENER    │ Triggers:
                                         │  (updates    │ • Balance update
    ┌───────────────────┐                │   UI)        │ • Notification
    │  TOPUP_REQUESTS   │                └──────────────┤ • Spending calc
    │  Collection       │                  │ │          │
    │                   │                  │ │          └─────────────┘
    │ Doc: topup001     │                  │ │
    │ ├─ guardianId ────┼──────────┐       │ │
    │ ├─ studentId      │          │       │ │
    │ ├─ amount         │          │       │ │
    │ ├─ referenceNo    │          │       │ │
    │ ├─ status         │          │       │ │
    │ └─ timestamp      │          │ ┌─────▼─┴──────────────┐
    └───────────────────┘          │ │  NOTIFICATIONS      │
                                   │ │  Collection         │
    ┌──────────────────┐           │ │                     │
    │  SETTINGS        │           │ │ Doc: notif001       │
    │  Collection      │           │ │ ├─ guardianId ──┐   │
    │                  │           │ │ ├─ message       │   │
    │ Doc: payment_qr  │           │ │ ├─ type          │   │
    │ ├─ qr_50.png     │           │ │ ├─ timestamp     │   │
    │ ├─ qr_100.png    │           │ │ └─ read          │   │
    │ ├─ qr_200.png    │           │ └────────────┬────────┘
    │ └─ qr_500.png    │           │              │
    └──────────────────┘           └──────────────┘
         │                               │
         │ Listener update cycle:        │
         │ (Poll interval ~1-2 sec)     │
         │                              │
    ┌────▼──────────────────────────────▼─────┐
    │         PARENT DASHBOARD STATE          │
    │  (React Context / Component State)      │
    │                                         │
    │  • Student balance (updated)            │
    │  • Today's spending (recalculated)      │
    │  • Daily limit status                   │
    │  • Recent transactions (sorted)         │
    │  • Notifications (newest first)         │
    │  • QR codes for top-up                  │
    └─────────────────┬───────────────────────┘
                      │
                      ▼
        ┌─────────────────────────┐
        │  UI RE-RENDER           │
        │ ✓ Balance updated       │
        │ ✓ Spending bar updated  │
        │ ✓ Trend chart refreshed │
        │ ✓ Notifications shown   │
        │ ✓ Stats recalculated    │
        └─────────────────────────┘
```

---

## 9. DAILY SPENDING LIMIT LOGIC

```
STUDENT MAKES A PURCHASE AT CANTEEN

┌──────────────────────────────┐
│  Transaction Record Created  │
│  in Firestore (auto-trigger) │
└──────────┬───────────────────┘
           │
           ▼
┌──────────────────────────────┐
│  Real-time Listener fires    │
│  (Dashboard detects new      │
│   transaction)               │
└──────────┬───────────────────┘
           │
           ▼
┌──────────────────────────────┐
│  Calculate Today's Spending  │
│  • Sum all transactions      │
│    where date = today        │
└──────────┬───────────────────┘
           │
           ▼
    ┌──────────────────────────┐
    │ Compare to dailyLimit     │
    └──────────┬───────────────┘
               │
    ┌──────────┴────────────┐
    │                       │
    ▼ (Spent < Limit)   ▼ (Spent ≥ Limit)
 ✅ ALLOWED            ❌ BLOCKED
 Purchase recorded    Purchase prevented
 Balance updated      (handled by POS)
 Progress bar         
 shows % usage        Send notification:
 (< 100%)             "Purchase Blocked
                       Daily Limit Exceeded"
 If Spent > 80%:      
 → Yellow warning     Dashboard shows:
                      • Red progress bar
 If Spent > 100%:     • "Limit Exceeded"
 → Red indicator      • Amount over limit
 → Alert notification
```

---

## 10. COMPLETE USER JOURNEY FLOW

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                   COMPLETE USER JOURNEY                         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

        STEP 1: LAUNCH
            │
            ▼
    ┌───────────────┐
    │ Visit App URL │
    │ or Reload     │
    └───────┬───────┘
            │
            ▼
    STEP 2: LOGIN FLOW
    ┌───────────────────────────┐
    │ Login Page Displayed      │
    │ (Forms, Styling Applied)  │
    └───────┬───────────────────┘
            │
            ├─ Enter Email
            ├─ Enter Password
            └─ Click "Login"
                    │
                    ▼
            Firebase Authentication
                    │
            ┌───────┴────────┐
            │                │
        ❌ FAIL          SUCCESS ✅
            │                │
            ▼                ▼
    Error Message      Role Check
    Displayed          (Firestore users)
            │                │
            ▼                ▼
        Retry         ┌──────────────┐
                      │ role=parent? │
                      └──────┬───────┘
                             │
                    ┌────────┴────────┐
                    │                 │
                YES │                 │ NO
                    ▼                 ▼
            STEP 3: PARENT           Redirect to:
            DASHBOARD INIT           ❌ /admin-panel
            ┌────────────────┐       ❌ /pos
            │ 6 Firestore    │       ⚠️ Error
            │ Listeners      │
            │ Started        │       NOT IMPLEMENTED
            └────────┬───────┘
                     │
                     ▼
            STEP 4: DASHBOARD
            FULLY LOADED
            ┌────────────────────────────┐
            │ 6 Sections Ready:          │
            │ • Header (nav, settings)   │
            │ • Balance Sidebar          │
            │ • Daily Spending Limit     │
            │ • Spending Trends          │
            │ • Spending Stats           │
            │ • Recent Activity          │
            │ • Notifications            │
            └────────────┬───────────────┘
                         │
        ┌────────────────┼────────────────┐
        │                │                │
        ▼                ▼                ▼
    STEP 5: USER INTERACTIONS
    
    [A] Monitor Spending     [B] Request Top-Up     [C] Manage Settings
    ├─ View balance         ├─ Click Top-Up        ├─ Edit student info
    ├─ View daily limit     ├─ Select amount       ├─ Update guardian
    ├─ Check spending trend ├─ Enter reference     ├─ Change password
    ├─ View recent trans    ├─ Submit QR/payment   ├─ Upload photo
    ├─ Read notifications   ├─ Admin approves      └─ Save changes
    └─ Filter activities    └─ Balance updated     
                                                   [D] Check Alerts
                                                   ├─ Limit exceeded
        ┌─────────────────────────────┐            ├─ Purchase blocked
        │ REAL-TIME UPDATES           │            ├─ Top-up status
        │ (Every new transaction)     │            └─ Mark as read
        │                             │
        │ • Firestore emits update    │
        │ • Dashboard listener catches│
        │ • State updates             │
        │ • UI re-renders instantly   │
        └─────────────────────────────┘
                         │
                         ▼
        STEP 6: CONTINUOUS MONITORING
        ┌─────────────────────────────┐
        │ Parent monitors 24/7        │
        │ • Purchases appear live     │
        │ • Spending % updates        │
        │ • Alerts on limits          │
        │ • Notifications appear      │
        │ • Can take action anytime   │
        └─────────────────────────────┘
                         │
                         ▼
        STEP 7: LOGOUT
        ┌──────────────┐
        │ Click Logout │ (Header)
        └──────┬───────┘
               │
               ▼
        Firebase signOut()
               │
               ▼
        Clear localStorage
               │
               ▼
        Redirect to Login
```

---

## 11. FIRESTORE DATA SCHEMA

```
FIRESTORE DATABASE STRUCTURE
edutap-thesis/

├── users/                              [Collection]
│   └── {userId}/
│       ├─ id: string                   (unique user ID)
│       ├─ personId: string             (linked to person collection)
│       ├─ userName: string             (login username)
│       ├─ email: string                (login email)
│       ├─ role: string                 (admin | staff | parent)
│       ├─ subRole: string              (optional role variant)
│       ├─ organizationId: string       (link to organization)
│       ├─ status: string               (active | inactive | pending)
│       ├─ avatar: string               (photo URL)
│       ├─ person: {object}             (nested data)
│       │   ├─ personalInfo: {object}
│       │   │   ├─ firstName: string
│       │   │   ├─ lastName: string
│       │   │   ├─ dateOfBirth: date
│       │   │   ├─ age: number
│       │   │   ├─ gender: string
│       │   │   └─ nationality: string
│       │   ├─ contactInfo: {object}
│       │   │   ├─ email: string
│       │   │   ├─ phones: array
│       │   │   └─ address: string
│       │   ├─ identification: {object}
│       │   │   ├─ type: string
│       │   │   ├─ number: string
│       │   │   └─ expiryDate: date
│       │   └─ metadata: {object}
│       │       ├─ isActive: boolean
│       │       ├─ status: string
│       │       ├─ createdBy: string
│       │       ├─ lastLoginAt: timestamp
│       │       └─ isDeleted: boolean
│       └─ organization: {object}      (nested branding)
│           ├─ branding: {object}
│           │   ├─ logo: string        (URL)
│           │   ├─ background: string  (color/URL)
│           │   ├─ font: string        (font family)
│           │   └─ colors: {object}    (CSS vars)
│           ├─ name: string            (school name)
│           └─ code: string            (org identifier)
│
├── students/                           [Collection]
│   └── {studentId}/
│       ├─ name: string                 (full name)
│       ├─ guardianId: string           (parent user ID)
│       ├─ gradeLevel: string           (grade/year)
│       ├─ lrn: string                  (LRN - Learning Record Number)
│       ├─ schoolEmail: string          (email@school.edu)
│       ├─ schoolName: string           (school name)
│       ├─ balance: number              (₱ wallet balance)
│       ├─ dailyLimit: number           (₱ daily spending limit)
│       ├─ photoUrl: string             (student photo)
│       └─ lastUpdated: timestamp       (for sync)
│
├── transactions/                       [Collection]
│   └── {transactionId}/
│       ├─ lrn: string                  (student LRN)
│       ├─ items: array                 (purchases)
│       │   └─ {item}
│       │       ├─ name: string         (item name)
│       │       ├─ quantity: number
│       │       ├─ unitPrice: number    (₱)
│       │       └─ total: number        (₱)
│       ├─ total: number                (₱ transaction total)
│       ├─ timestamp: timestamp         (when purchased)
│       ├─ status: string               (completed | blocked | refunded)
│       └─ posMachineId: string         (which register)
│
├── topup_requests/                     [Collection]
│   └── {requestId}/
│       ├─ guardianId: string           (parent requesting)
│       ├─ studentId: string            (student to top-up)
│       ├─ amount: number               (₱ requested)
│       ├─ referenceNo: string          (GCash/E-Wallet ref)
│       ├─ status: string               (pending | approved | rejected)
│       ├─ createdAt: timestamp         (request time)
│       ├─ approvedAt: timestamp        (approval time, if approved)
│       ├─ approvedBy: string           (admin user ID, if approved)
│       └─ notes: string                (rejection reason, if rejected)
│
├── notifications/                      [Collection]
│   └── {notificationId}/
│       ├─ guardianId: string           (recipient parent ID)
│       ├─ type: string                 (purchase | limit_exceeded | blocked
│       │                                topup_approved | topup_rejected)
│       ├─ message: string              (notification text)
│       ├─ relatedId: string            (transaction/topup ID)
│       ├─ timestamp: timestamp         (when created)
│       ├─ read: boolean                (seen by user?)
│       └─ data: {object}               (extra context)
│           ├─ amount: number           (₱ if purchase/topup)
│           ├─ items: array             (if purchase)
│           ├─ studentName: string
│           └─ spentToday: number       (if limit-related)
│
└── settings/                           [Collection]
    └── payment_qr/
        ├─ qr_50: string                (QR code URL for 50 pesos)
        ├─ qr_100: string               (QR code URL for 100 pesos)
        ├─ qr_200: string               (QR code URL for 200 pesos)
        ├─ qr_500: string               (QR code URL for 500 pesos)
        └─ updatedAt: timestamp         (last QR update)
```

---

## 12. KEY API ENDPOINTS

```
Base URL: http://localhost:3000/api

AUTHENTICATION
POST   /auth/login              (email, password) → token
POST   /auth/logout             () → success

USER MANAGEMENT
GET    /user                    () → [users]
POST   /user                    (userData) → {user}
GET    /user/:id                () → {user}
PATCH  /user/:id                (updates) → {user}
DELETE /user/:id                () → success

GET    /user/current            () → {currentUser}

PERSON MANAGEMENT
GET    /person                  () → [people]
POST   /person                  (personData) → {person}
GET    /person/:id              () → {person}
PATCH  /person/:id              (updates) → {person}
DELETE /person/:id              () → success

[Additional Firestore-based endpoints may exist
 for students, transactions, topup_requests, etc.]
```

---

## 13. TECHNOLOGY STACK SUMMARY

```
┌─────────────────────────────────────────┐
│          FRONTEND (Client)              │
├─────────────────────────────────────────┤
│ • React 19 + React Router 7.5           │
│ • TypeScript (strict mode)              │
│ • Tailwind CSS 4.1 + Radix UI           │
│ • Lucide Icons (UI icons)               │
│ • Firebase Auth (email/password)        │
│ • Firestore (real-time DB queries)      │
│ • React Query 5 (API caching)           │
│ • Built with Vite                       │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│        BACKEND (Server)                 │
├─────────────────────────────────────────┤
│ • Node.js + Express (localhost:3000)    │
│ • Authentication middleware              │
│ • API routes for users, persons, etc    │
│ • Session management (httpOnly cookies) │
│ • Database ORM/Query layers             │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│      EXTERNAL SERVICES                  │
├─────────────────────────────────────────┤
│ • Firebase Auth (user authentication)   │
│ • Firestore (primary database)          │
│ • Firebase Realtime DB (optional)       │
│ • Google Fonts (styling)                │
│ • GCash/E-Wallet (payment partners)     │
└─────────────────────────────────────────┘
```

---

## 14. CURRENT IMPLEMENTATION STATUS

```
✅ FULLY IMPLEMENTED
├─ Login Flow (Firebase Auth)
├─ Password Reset Flow
├─ Parent Dashboard (Complete with all features)
│   ├─ Header & Navigation
│   ├─ Balance Display
│   ├─ Daily Spending Limits
│   ├─ Spending Trends (Chart)
│   ├─ Recent Activity Tracking
│   ├─ Real-time Notifications
│   ├─ Top-Up Request System
│   ├─ Settings Management
│   └─ Transaction Filtering
├─ Firebase Integration (Auth + Firestore)
├─ Real-time Listeners (6 listeners on dashboard)
└─ Responsive UI (Mobile & Desktop)

❌ NOT IMPLEMENTED
├─ Admin Panel (/admin-panel)
│   └─ Layout scaffold exists but no content
├─ POS/Staff Interface (/pos)
│   └─ Route not created
├─ Landing Page (/landing)
│   └─ Placeholder content only
└─ Main Layouts (not being used)
    ├─ admin-layout
    ├─ auth-layout
    └─ main-layout

⚠️ POTENTIAL ISSUES
├─ Admin/Staff redirects fail (routes not implemented)
├─ 3 unused layout components (dead code)
├─ No error boundaries on individual components
├─ No explicit loading states on some modals
└─ API endpoints may not be fully implemented
```

---

## 15. USER FLOW PATHS (By Role)

```
┌─────────────────────────────────────────────────────────────────┐
│                    LOGIN PAGE (Universal Entry)                 │
└────────────────────────────┬────────────────────────────────────┘
                             │
                    Firebase Authentication
                             │
              ┌──────────────┼──────────────┐
              │              │              │
              ▼              ▼              ▼
         role=admin     role=parent   role=staff
              │              │              │
         ❌ ERROR        ✅ SUCCESS    ❌ ERROR
         NOT IMPL       Redirect to    NOT IMPL
              │         /parent-dash    │
              ▼              ▼           ▼
         Admin Panel     Parent       POS/Staff
         (missing)       Dashboard    (missing)
                         (full UI)
              │              │           │
              └──────────────┴───────────┘
                             │
              ⚠️ Only parent users can proceed
                 Admin/Staff users stuck
```

---

## 16. DATA SYNC & REAL-TIME UPDATES ARCHITECTURE

```
PARENT DASHBOARD DATA SYNCHRONIZATION

┌─────────────────────────────────────────────────────────┐
│            Firestore Real-Time Listeners                │
│                                                         │
│  6 Parallel Listeners (started on dashboard mount):     │
│                                                         │
│  1. Students Listener                                   │
│     Query: Where guardianId = parentId                  │
│     Updates: balance, dailyLimit, studentInfo          │
│     Trigger: Whenever student balance changes          │
│                                                         │
│  2. Transactions Listener                               │
│     Query: Where lrn = studentLrn                      │
│     Updates: recentActivity, totalSpent                │
│     Trigger: New purchase at canteen POS               │
│                                                         │
│  3. TopUp Requests Listener                             │
│     Query: Where guardianId = parentId                  │
│     Updates: topupStatus, balance (if approved)        │
│     Trigger: Admin approves/rejects top-up             │
│                                                         │
│  4. Today's Spending Listener                           │
│     Query: Where lrn = studentLrn & date = today       │
│     Updates: spentToday, progressBar, warnings         │
│     Trigger: Any new transaction today                 │
│                                                         │
│  5. Notifications Listener                              │
│     Query: Where guardianId = parentId & read = false  │
│     Updates: notificationList, alerts                  │
│     Trigger: Purchase, limit violation, topup status   │
│                                                         │
│  6. Settings Listener                                   │
│     Query: Get payment_qr collection                    │
│     Updates: QR codes for top-up                       │
│     Trigger: Admin updates payment settings            │
│                                                         │
└──────────────┬──────────────────────────────────────────┘
               │
        ┌──────▼────────┐
        │ Listener Queue │
        │ (Batched)      │
        └──────┬─────────┘
               │
        ┌──────▼────────────────────┐
        │ React Context State Update │
        │ (AuthContext or Custom)    │
        └──────┬────────────────────┘
               │
        ┌──────▼────────────────────┐
        │ Component State Updates    │
        │ (via hooks)                │
        └──────┬────────────────────┘
               │
        ┌──────▼────────────────────┐
        │ React Render Cycle        │
        │ (Re-render affected comps)│
        └──────┬────────────────────┘
               │
        ┌──────▼────────────────────┐
        │ UI Updates Visible        │
        │ • Balance refreshed       │
        │ • Progress bar updated    │
        │ • Notifications shown     │
        │ • Charts re-calculated    │
        │ • Stats refreshed         │
        └───────────────────────────┘
```

---

## 17. SECURITY & AUTHENTICATION FLOW

```
SECURITY LAYERS

┌──────────────────────────────────────────────────────┐
│ 1. FRONTEND AUTHENTICATION (React Router Guards)    │
│                                                      │
│ • Check AuthContext.isAuthenticated before loading  │
│ • If not authenticated → Redirect to /login         │
│ • Only parent users can access /parent-dashboard    │
└──────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────┐
│ 2. FIREBASE AUTH LAYER                              │
│                                                      │
│ • Email/Password authentication (signInWithEmail)   │
│ • Firebase JWT token (secure, auto-refreshing)      │
│ • Session persistence via cookies                   │
└──────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────┐
│ 3. API BACKEND LAYER                                │
│                                                      │
│ • httpOnly cookies for session storage              │
│ • credentials: 'include' sent with all requests     │
│ • Server validates session before responding        │
│ • CORS configured for trusted origins               │
└──────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────┐
│ 4. FIRESTORE RULES (Backend-enforced)               │
│                                                      │
│ • Read: User can only see their own documents       │
│ • Write: Only admins can approve top-ups            │
│ • Delete: Soft-delete only (metadata flag)          │
└──────────────────────────────────────────────────────┘

LOGIN → AUTH TOKEN → API CALLS → FIRESTORE QUERIES
       (Firebase)  (httpOnly)  (Rules-based access)
```

---

## 18. ERROR SCENARIOS & HANDLING

```
COMMON ERROR SCENARIOS

┌─────────────────────────────────────────────────────┐
│ LOGIN ERRORS                                        │
├─────────────────────────────────────────────────────┤
│ ❌ Invalid Email Format                             │
│    → Message: "Enter a valid email address"         │
│    → Action: Stay on login page, user corrects      │
│                                                     │
│ ❌ Invalid Credentials                              │
│    → Message: "Email or password incorrect"         │
│    → Action: User retries login                     │
│                                                     │
│ ❌ User Not in Firestore                            │
│    → Message: "User profile not found"              │
│    → Action: Contact admin to create profile        │
│                                                     │
│ ❌ Role Not Found / Invalid Role                    │
│    → Message: "User role not configured"            │
│    → Action: Admin manually sets role               │
│                                                     │
│ ❌ Admin/Staff User (route not implemented)         │
│    → Message: Redirect fails or error page          │
│    → Action: Admin/POS interfaces need development  │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ DASHBOARD ERRORS                                    │
├─────────────────────────────────────────────────────┤
│ ❌ Firestore Listener Fails                         │
│    → Message: "Cannot load transactions"            │
│    → Action: Retry or show cached data              │
│                                                     │
│ ❌ Network Disconnected                             │
│    → Message: "Offline - using cached data"         │
│    → Action: Show last known state                  │
│                                                     │
│ ❌ Top-Up Modal Submit Fails                        │
│    → Message: "Failed to submit top-up"             │
│    → Action: User retries or tries different amount │
│                                                     │
│ ❌ Settings Update Fails                            │
│    → Message: "Could not save settings"             │
│    → Action: User retries changes                   │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SPENDING LIMIT ERRORS                               │
├─────────────────────────────────────────────────────┤
│ ❌ Purchase Blocked (Limit Exceeded)                │
│    → Message: "Purchase blocked - daily limit met"  │
│    → Action: Parent receives notification           │
│    → Can top-up student balance to allow more       │
│                                                     │
│ ❌ Invalid Daily Limit (negative/too high)          │
│    → Message: "Limit must be between ₱0 - ₱50000"  │
│    → Action: Parent corrects value                  │
└─────────────────────────────────────────────────────┘
```

---

## 19. NEXT STEPS FOR FULL SYSTEM COMPLETION

```
ROADMAP FOR COMPLETE IMPLEMENTATION

PHASE 1: Complete Current Parent Features (80% done)
├─ ✅ Dashboard fully functional
├─ ✅ Real-time updates working
├─ ✅ Top-up system functional
├─ ✅ Settings management working
└─ ✅ Notifications displaying

PHASE 2: Admin Panel Implementation (0% done)
├─ Build admin-layout structure
├─ Create admin dashboard page
├─ Add user management interface
├─ Implement top-up approval system
├─ Add spending analytics & reports
├─ Create student account management
└─ Build system configuration panel

PHASE 3: POS/Staff Interface Implementation (0% done)
├─ Build POS dashboard
├─ Create transaction recording system
├─ Implement spending limit checks
├─ Add receipt printing functionality
├─ Create inventory management
└─ Build daily reconciliation reports

PHASE 4: Backend API Completion
├─ Verify all endpoints are implemented
├─ Add admin approval workflows
├─ Implement transaction logging
├─ Add audit trails
├─ Create backup & recovery system
└─ Add performance monitoring

PHASE 5: Testing & Deployment
├─ Unit tests for components
├─ Integration tests for flows
├─ End-to-end testing
├─ Performance optimization
├─ Security audit
└─ Production deployment
```

---

## 20. QUICK REFERENCE - FILE LOCATIONS

```
KEY FILES TO KNOW

Entry Point:
  app/root.tsx                         ← Main app component

Routes:
  app/routes.ts                        ← All route definitions
  app/routes/login-page.tsx           ← Login page
  app/routes/parent-dashboard.tsx     ← Parent UI (1,455 lines!)
  app/routes/reset-password.tsx       ← Password reset

Auth:
  app/context/auth/auth-context.tsx   ← Auth state definition
  app/context/auth/auth-provider.tsx  ← Auth state provider
  app/services/auth-service.ts        ← Login/logout API calls

Parent Components:
  app/components/parent/               ← All parent UI components
  ├─ parent-header.tsx
  ├─ balance-sidebar.tsx
  ├─ daily-spending-limit.tsx
  ├─ recent-activity.tsx
  ├─ spending-stats.tsx
  ├─ spending-trend.tsx
  ├─ notifications.tsx
  └─ modals/                          ← All modal dialogs
     ├─ topup-modal.tsx
     ├─ settings-modal.tsx
     ├─ activity-filter-modal.tsx
     └─ notification-details-modal.tsx

Config:
  app/configs/firebase.ts             ← Firebase setup
  app/configs/endpoints.ts            ← API endpoints

API Client:
  app/lib/api-client.ts               ← HTTP client wrapper
  app/services/auth-service.ts        ← Auth API calls
  app/services/user-service.ts        ← User CRUD calls
```

---

**END OF SYSTEM FLOW DOCUMENTATION**
