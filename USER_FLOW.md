# EduTap User Flow Diagram

## COMPLETE USER JOURNEY FROM LOGIN

```
╔════════════════════════════════════════════════════════════════════════════╗
║                                                                            ║
║                      🚀 APPLICATION STARTUP                               ║
║                          (root.tsx)                                        ║
║                                                                            ║
╚════════════════════════════════════════════════════════════════════════════╝
                                    │
                                    ▼
╔════════════════════════════════════════════════════════════════════════════╗
║                                                                            ║
║                    📱 LOGIN PAGE DISPLAYED                                ║
║                      (/login-page.tsx)                                    ║
║                                                                            ║
║  ┌──────────────────────────────────────────────────────────────────┐    ║
║  │                                                                  │    ║
║  │              🏢 EduTap School Logo                              │    ║
║  │           (Organization Branding Applied)                      │    ║
║  │                                                                  │    ║
║  │  ┌────────────────────────────────────────────────────────┐    │    ║
║  │  │  📧 Email                                              │    │    ║
║  │  │  [________________________________]                  │    │    ║
║  │  │                                                        │    │    ║
║  │  │  🔑 Password                                           │    │    ║
║  │  │  [________________________________]                  │    │    ║
║  │  │                                                        │    │    ║
║  │  │  [🔘 LOGIN]              [🔗 Forgot Password?]       │    │    ║
║  │  └────────────────────────────────────────────────────────┘    │    ║
║  │                                                                  │    ║
║  │              © 2024 St. Clare College                           │    ║
║  │                                                                  │    ║
║  └──────────────────────────────────────────────────────────────────┘    ║
║                                                                            ║
║  USER ACTIONS:                                                             ║
║  • Enter email address                                                     ║
║  • Enter password                                                          ║
║  • Click "LOGIN" button                                                    ║
║                                                                            ║
╚════════════════════════════════════════════════════════════════════════════╝
                                    │
                    ┌───────────────┴───────────────┐
                    │                               │
                    │ Click "LOGIN"                 │
                    ▼                               ▼
                                           (ALTERNATIVE)
                                      "Forgot Password?"
                                           │
                                           ▼
                                    ╔═══════════════════════════════╗
                                    ║  PASSWORD RESET PAGE          ║
                                    ║  • Enter email                ║
                                    ║  • Verify reset link          ║
                                    ║  • Enter new password         ║
                                    ║  • Confirm password           ║
                                    ║  → Return to Login            ║
                                    ╚═══════════════════════════════╝


╔════════════════════════════════════════════════════════════════════════════╗
║                                                                            ║
║                🔐 FIREBASE AUTHENTICATION LAYER                           ║
║                                                                            ║
║  signInWithEmailAndPassword(email, password)                              ║
║                                                                            ║
╚════════════════════════════════════════════════════════════════════════════╝
                                    │
                    ┌───────────────┴───────────────┐
                    │                               │
              ❌ FAILED                         ✅ SUCCESS
                    │                               │
                    ▼                               ▼
          ┌─────────────────────┐         ┌──────────────────┐
          │ ERROR DISPLAYED     │         │ Firebase Token   │
          │ "Invalid email or   │         │ Obtained         │
          │  password"          │         └────────┬─────────┘
          │                     │                  │
          │ User remains on     │                  ▼
          │ login page          │         ┌──────────────────────────┐
          │ Can retry or use    │         │ Query Firestore users    │
          │ forgot password     │         │ collection               │
          │                     │         │ WHERE email = provided   │
          └─────────────────────┘         └────────┬─────────────────┘
                    △                              │
                    │                              ▼
                    └──────────────────   ┌──────────────────────────┐
                                          │ User document found?     │
                                          └────────┬────────┬────────┘
                                                   │        │
                                              YES │        │ NO
                                                   ▼        ▼
                                          ┌──────────────┐  ┌──────────────┐
                                          │ Extract:     │  │ Error:       │
                                          │ • role       │  │ "User not    │
                                          │ • personId   │  │  configured" │
                                          │ • org data   │  │              │
                                          │ • avatar     │  │ Contact admin│
                                          └──────┬───────┘  └──────────────┘
                                                 │
                                    ┌────────────┴────────────┐
                                    │                         │
                            Store in localStorage:
                            • username
                            • role
                            • personId
                                    │
                                    ▼
                        ╔════════════════════════════╗
                        ║  🎯 ROLE-BASED ROUTING      ║
                        ║  (CRITICAL DECISION POINT)  ║
                        ╚════════════════════════════╝
                                    │
                ┌───────────────────┼───────────────────┐
                │                   │                   │
           role=admin          role=parent         role=staff
                │                   │                   │
                ▼                   ▼                   ▼
            ┌─────────┐         ┌────────────┐     ┌────────┐
            │ ❌ ERROR │         │ ✅ PROCEED │     │ ❌ ERROR│
            │          │         │            │     │         │
            │ /admin-  │         │ /parent-   │     │ /pos    │
            │ panel    │         │ dashboard  │     │         │
            │ NOT IMPL │         │ IMPL ✓     │     │ NOT IMPL│
            └──────────┘         └─────┬──────┘     └─────────┘
                                       │
                                       ▼
╔════════════════════════════════════════════════════════════════════════════╗
║                                                                            ║
║                   ✅ PARENT DASHBOARD LOAD                                ║
║                      (/parent-dashboard.tsx)                              ║
║                                                                            ║
║  STEP 1: AuthContext Initialization                                       ║
║  ✓ Firebase onAuthStateChanged listener started                           ║
║  ✓ User state synced                                                       ║
║  ✓ Organization branding applied (CSS variables)                          ║
║                                                                            ║
╚════════════════════════════════════════════════════════════════════════════╝
                                    │
                                    ▼
╔════════════════════════════════════════════════════════════════════════════╗
║                                                                            ║
║                 STEP 2: 6 Firestore Listeners Started                      ║
║                                                                            ║
║  Listener 1: Students Collection                                           ║
║  ├─ Query: WHERE guardianId = currentUserId                               ║
║  ├─ Fetch: Student name, grade, LRN, balance, dailyLimit                  ║
║  └─ Result: Student data loaded                                            ║
║                                                                            ║
║  Listener 2: Transactions Collection (Real-time)                           ║
║  ├─ Query: WHERE lrn = studentLrn                                         ║
║  ├─ Fetch: All transactions (purchases at canteen)                        ║
║  └─ Result: Recent activity list populated                                 ║
║                                                                            ║
║  Listener 3: TopUp Requests Collection                                     ║
║  ├─ Query: WHERE guardianId = currentUserId                               ║
║  ├─ Fetch: Previous & current top-up requests status                      ║
║  └─ Result: Top-up history & pending approvals                             ║
║                                                                            ║
║  Listener 4: Today's Spending (24-hour window)                             ║
║  ├─ Query: WHERE lrn = studentLrn & date = TODAY                          ║
║  ├─ Fetch: Sum of today's transactions                                    ║
║  └─ Result: Daily spending amount calculated                               ║
║                                                                            ║
║  Listener 5: Notifications Collection (Real-time)                          ║
║  ├─ Query: WHERE guardianId = currentUserId                               ║
║  ├─ Fetch: Purchase alerts, limit warnings, top-up updates                ║
║  └─ Result: Notification feed populated                                    ║
║                                                                            ║
║  Listener 6: Settings / Payment QR Codes                                   ║
║  ├─ Query: GET payment_qr from settings                                   ║
║  ├─ Fetch: QR codes for 50, 100, 200, 500 pesos                          ║
║  └─ Result: QR codes available for top-up modal                            ║
║                                                                            ║
╚════════════════════════════════════════════════════════════════════════════╝
                                    │
                                    ▼ (All data ready)
╔════════════════════════════════════════════════════════════════════════════╗
║                                                                            ║
║                   📊 PARENT DASHBOARD FULLY LOADED                         ║
║                                                                            ║
║  ┌────────────────────────────────────────────────────────────────────┐   ║
║  │                                                                    │   ║
║  │  🏢 Logo    📱 Student: Maria Garcia    🕐 2:45 PM  ⚙️ Settings   │   ║
║  │                                                                    │   ║
║  ├────────────────────────────────────────────────────────────────────┤   ║
║  │                                                                    │   ║
║  │  ┌──────────────────┐  ┌─────────────────────────────────┐        │   ║
║  │  │   LEFT SIDEBAR   │  │      MAIN CONTENT AREA          │        │   ║
║  │  │  (Desktop only)  │  │                                 │        │   ║
║  │  │                  │  │  ┌────────────────────────────┐ │        │   ║
║  │  │ 💰 BALANCE      │  │  │ SPENDING LIMIT TODAY       │ │        │   ║
║  │  │ ₱ 2,500         │  │  │                            │ │        │   ║
║  │  │                  │  │  │ ████████░░ 85%            │ │        │   ║
║  │  │ 📱 Payment      │  │  │ Spent: ₱850 of ₱1,000     │ │        │   ║
║  │  │ Methods         │  │  │                            │ │        │   ║
║  │  │ • GCash         │  │  │ ⚠️ Warning (Near Limit)   │ │        │   ║
║  │  │ • E-Wallet      │  │  │ [📝 Edit Limit]            │ │        │   ║
║  │  │                  │  │  └────────────────────────────┘ │        │   ║
║  │  │ 🎯 QR CODE      │  │                                 │        │   ║
║  │  │ [QR IMAGE]      │  │  ┌────────────────────────────┐ │        │   ║
║  │  │                  │  │  │ SPENDING TREND (Chart)    │ │        │   ║
║  │  │ [💳 TOP-UP]     │  │  │                            │ │        │   ║
║  │  │                  │  │  │    ╱╲    ╱╲              │ │        │   ║
║  │  └──────────────────┘  │  │   ╱  ╲  ╱  ╲             │ │        │   ║
║  │                        │  │  ╱    ╲╱    ╲            │ │        │   ║
║  │                        │  │ Mon Tue Wed Thu Fri       │ │        │   ║
║  │                        │  │ [Weekly │ Monthly]       │ │        │   ║
║  │                        │  └────────────────────────────┘ │        │   ║
║  │                        │                                 │        │   ║
║  │                        │  ┌────────┬────────┬─────────┐ │        │   ║
║  │                        │  │Limit  │Days   │Highest │ │        │   ║
║  │                        │  │Hit    │Over   │Purchase│ │        │   ║
║  │                        │  │       │       │        │ │        │   ║
║  │                        │  │ 5     │ 2     │ ₱450   │ │        │   ║
║  │                        │  └────────┴────────┴─────────┘ │        │   ║
║  │                        │                                 │        │   ║
║  │  ┌────────────────────┐  ┌──────────────────────────┐    │        │   ║
║  │  │ RIGHT SIDEBAR      │  │ RECENT ACTIVITY          │    │        │   ║
║  │  │                    │  │                          │    │        │   ║
║  │  │ 📢 NOTIFICATIONS   │  │ TODAY                    │    │        │   ║
║  │  │                    │  │ 🍜 Lumpia - ₱80 2:15 PM  │    │        │   ║
║  │  │ ✅ Top-up approved │  │ 🥤 Drinks - ₱30 1:45 PM  │    │        │   ║
║  │  │ "₱500 added"       │  │ 🍱 Rice Bowl - ₱150 1 PM  │    │        │   ║
║  │  │                    │  │                          │    │        │   ║
║  │  │ ⚠️ Purchase blocked│  │ YESTERDAY                │    │        │   ║
║  │  │ "Limit exceeded"   │  │ Total: ₱280              │    │        │   ║
║  │  │                    │  │                          │    │        │   ║
║  │  │ 💳 Purchase        │  │ [📅 Filter]  [📆 Today] │    │        │   ║
║  │  │ ₱450 @ Canteen     │  │                          │    │        │   ║
║  │  │ 3:10 PM            │  └──────────────────────────┘    │        │   ║
║  │  │ [Mark as read]     │                                 │        │   ║
║  │  └────────────────────┘                                 │        │   ║
║  │                                                                    │   ║
║  └────────────────────────────────────────────────────────────────────┘   ║
║                                                                            ║
║  KEY ELEMENTS VISIBLE:                                                     ║
║  ✓ Header: Logo, Student name, Time, Settings button                      ║
║  ✓ Balance display (sidebar)                                               ║
║  ✓ Daily spending limit with progress bar                                  ║
║  ✓ Spending trend chart                                                    ║
║  ✓ Statistics (limit hits, days over, highest purchase)                    ║
║  ✓ Recent activity list with date grouping                                 ║
║  ✓ Real-time notifications                                                 ║
║                                                                            ║
╚════════════════════════════════════════════════════════════════════════════╝
                                    │
                    ┌───────────────┴───────────────┐
                    │                               │
              USER INTERACTIONS                 REAL-TIME UPDATES
                    │                               │
        ┌───────────┼───────────┐          (Automatic - no user action)
        │           │           │                   │
        ▼           ▼           ▼                   ▼
     (A)         (B)          (C)            ┌──────────────┐
   MONITOR      REQUEST      MANAGE         │ Student      │
   SPENDING     TOP-UP       SETTINGS       │ makes a      │
        │           │          │            │ purchase     │
        │           │          │            │ at canteen   │
        ▼           ▼          ▼            └──────┬───────┘
                                                   │
╔════════════════════════════════════════════════════════════════════════════╗
║ (A) MONITOR SPENDING                                                       ║
║                                                                            ║
║  User Actions:                                                             ║
║  • View balance: ₱2,500 (updated from Firestore)                          ║
║  • Check daily limit: ₱1,000 (remaining: ₱150)                            ║
║  • View spending trend: Chart shows weekly pattern                         ║
║  • Review recent purchases: Last 10 transactions                           ║
║  • Filter activity: By date or transaction type                           ║
║  • Read notifications: Purchase alerts, limit warnings                     ║
║                                                                            ║
║  Flow:                                                                     ║
║  Click element → Real-time data from Firestore → UI updates               ║
║                                                                            ║
╚════════════════════════════════════════════════════════════════════════════╝


╔════════════════════════════════════════════════════════════════════════════╗
║ (B) REQUEST TOP-UP (Detailed Flow)                                         ║
║                                                                            ║
║  Step 1: User clicks [💳 TOP-UP] button                                    ║
║          │                                                                 ║
║          ▼                                                                 ║
║  ┌─────────────────────────────────────────────────────┐                 ║
║  │                TOP-UP MODAL                         │                 ║
║  │                                                     │                 ║
║  │  📊 Current Balance: ₱2,500                         │                 ║
║  │                                                     │                 ║
║  │  How much do you want to top up?                    │                 ║
║  │  [🔘 ₱50] [🔘 ₱100] [🔘 ₱200] [🔘 ₱500] [📝 Custom]
║  │                                                     │                 ║
║  │  Selected Amount: ₱_______                          │                 ║
║  │                                                     │                 ║
║  │  📱 Scan QR Code (from settings):                   │                 ║
║  │  ┌─────────────────────────────┐                   │                 ║
║  │  │                             │                   │                 ║
║  │  │        [QR CODE IMAGE]      │  ← Load from      │                 ║
║  │  │                             │     Firestore     │                 ║
║  │  └─────────────────────────────┘                   │                 ║
║  │                                                     │                 ║
║  │  OR Send via GCash/E-Wallet to:                     │                 ║
║  │  09XX-XXXX-XXXX                                     │                 ║
║  │                                                     │                 ║
║  │  Reference Number:                                  │                 ║
║  │  [_________________________________]               │                 ║
║  │  (From GCash/E-Wallet transaction)                  │                 ║
║  │                                                     │                 ║
║  │  [✅ SUBMIT]     [❌ CANCEL]                        │                 ║
║  │                                                     │                 ║
║  └─────────────────────────────────────────────────────┘                 ║
║                                                                            ║
║  Step 2: User selects amount (e.g., ₱500)                                ║
║          └─ Enters reference number                                       ║
║             └─ Clicks SUBMIT                                              ║
║                │                                                          ║
║                ▼                                                          ║
║  Step 3: Submit to Firestore                                              ║
║          ├─ Create doc in topup_requests collection                       ║
║          ├─ Fields:                                                       ║
║          │  • guardianId: "user123"                                       ║
║          │  • studentId: "student456"                                     ║
║          │  • amount: 500                                                 ║
║          │  • referenceNo: "TXN123456"                                    ║
║          │  • status: "pending"                                           ║
║          │  • createdAt: <timestamp>                                      ║
║          └─ API call to backend                                           ║
║                │                                                          ║
║                ▼                                                          ║
║  Step 4: Success Message                                                  ║
║          ┌─────────────────────────────────┐                             ║
║          │ ✅ Top-up Request Submitted     │                             ║
║          │                                 │                             ║
║          │ Amount: ₱500                    │                             ║
║          │ Reference: TXN123456            │                             ║
║          │ Status: Pending Approval        │                             ║
║          │                                 │                             ║
║          │ [OK]                            │                             ║
║          └──────────────┬──────────────────┘                             ║
║                         │                                                ║
║                         ▼                                                ║
║          Modal closes, dashboard refreshes                               ║
║                         │                                                ║
║                         ▼                                                ║
║  Step 5: ADMIN PANEL (Background)                                        ║
║          ├─ Admin receives notification                                  ║
║          ├─ Reviews top-up request                                       ║
║          └─ Approves or Rejects                                          ║
║                │                                                         ║
║        ┌───────┴────────┐                                               ║
║        │                │                                               ║
║   ✅ APPROVED      ❌ REJECTED                                           ║
║        │                │                                               ║
║        ▼                ▼                                               ║
║   Update status  Update status                                          ║
║   in Firestore   in Firestore                                           ║
║        │                │                                               ║
║        ▼                ▼                                               ║
║   Increase        Keep balance                                          ║
║   student balance same                                                  ║
║        │                │                                               ║
║        └────────┬───────┘                                               ║
║               │                                                         ║
║               ▼                                                         ║
║  Step 6: Parent Notification                                            ║
║          ┌─────────────────────────────────┐                           ║
║          │ NEW NOTIFICATION                │                           ║
║          │                                 │                           ║
║          │ ✅ TOP-UP APPROVED              │                           ║
║          │ ₱500 added to balance           │                           ║
║          │ New Balance: ₱3,000             │                           ║
║          │ Time: 3:45 PM                   │                           ║
║          │                                 │                           ║
║          │ [Mark as read]                  │                           ║
║          └─────────────────────────────────┘                           ║
║                                                                            ║
║          Parent sees:                                                      ║
║          ✓ Balance updated in sidebar                                      ║
║          ✓ Notification appears                                            ║
║          ✓ Confirmation message                                            ║
║                                                                            ║
╚════════════════════════════════════════════════════════════════════════════╝


╔════════════════════════════════════════════════════════════════════════════╗
║ (C) MANAGE SETTINGS (Detailed Flow)                                        ║
║                                                                            ║
║  Step 1: User clicks [⚙️ SETTINGS] button                                  ║
║          │                                                                 ║
║          ▼                                                                 ║
║  ┌─────────────────────────────────────────────────────┐                 ║
║  │            SETTINGS MODAL (3 Tabs)                  │                 ║
║  │                                                     │                 ║
║  │  [📚 STUDENT] [👤 GUARDIAN] [🔑 PASSWORD]         │                 ║
║  │                                                     │                 ║
║  │  TAB 1: STUDENT INFO                                │                 ║
║  │  ┌───────────────────────────────────────────┐     │                 ║
║  │  │ Full Name:        [Maria Garcia]          │ (RO)│                 ║
║  │  │ Grade Level:      [Grade 7]               │     │                 ║
║  │  │ LRN:              [123456789012]          │     │                 ║
║  │  │ School Email:     [maria@school.edu]      │     │                 ║
║  │  │ School Name:      [St. Clare College]     │ (RO)│                 ║
║  │  │ Photo:            [📷 Upload New Photo]   │     │                 ║
║  │  │                   [mario.jpg (2.3 MB)]    │     │                 ║
║  │  │                                           │     │                 ║
║  │  │ [✅ SAVE] [❌ CANCEL]                     │     │                 ║
║  │  └───────────────────────────────────────────┘     │                 ║
║  │                                                     │                 ║
║  │  TAB 2: GUARDIAN INFO                               │                 ║
║  │  ┌───────────────────────────────────────────┐     │                 ║
║  │  │ Full Name:        [John Garcia]           │     │                 ║
║  │  │ Email:            [john@email.com]        │     │                 ║
║  │  │ Contact:          [+63 912 345 6789]      │     │                 ║
║  │  │ Relationship:     [Father ▼]              │     │                 ║
║  │  │                                           │     │                 ║
║  │  │ [✅ SAVE] [❌ CANCEL]                     │     │                 ║
║  │  └───────────────────────────────────────────┘     │                 ║
║  │                                                     │                 ║
║  │  TAB 3: CHANGE PASSWORD                             │                 ║
║  │  ┌───────────────────────────────────────────┐     │                 ║
║  │  │ Current Password: [***********]           │     │                 ║
║  │  │ New Password:     [***********]           │     │                 ║
║  │  │ Confirm Password: [***********]           │     │                 ║
║  │  │                                           │     │                 ║
║  │  │ [🔄 CHANGE PASSWORD] [❌ CANCEL]         │     │                 ║
║  │  └───────────────────────────────────────────┘     │                 ║
║  │                                                     │                 ║
║  └─────────────────────────────────────────────────────┘                 ║
║                                                                            ║
║  Step 2: User makes changes                                               ║
║          • Changes Grade Level to "Grade 8"                               ║
║          • Uploads new student photo                                      ║
║          • Changes contact number                                         ║
║          • Changes password                                               ║
║                │                                                          ║
║                ▼                                                          ║
║  Step 3: Click [✅ SAVE] or [🔄 CHANGE PASSWORD]                         ║
║          │                                                                ║
║          ▼                                                                ║
║  ┌─────────────────────────────────────────────────────┐                 ║
║  │ Validate inputs:                                    │                 ║
║  │ • Check email format (if email changed)             │                 ║
║  │ • Check password strength (min 8 chars, etc)        │                 ║
║  │ • Check required fields not empty                   │                 ║
║  │                                                     │                 ║
║  │ ✓ All valid or ❌ Show error message                │                 ║
║  └──────────────────┬────────────────────────────────┘                 ║
║                     │                                                    ║
║        ┌────────────┴────────────┐                                      ║
║        │                         │                                      ║
║    ❌ ERROR              ✅ SUCCESS                                      ║
║        │                         │                                      ║
║        ▼                         ▼                                      ║
║   Stay in modal     Update Firestore users
║   Show error msg    collection (for student info)
║                     Send to Firebase Auth
║                     (for password change)
║                                 │                                      ║
║                                 ▼                                      ║
║                     ┌─────────────────────────┐                        ║
║                     │ ✅ Changes Saved!       │                        ║
║                     │                         │                        ║
║                     │ Profile updated         │                        ║
║                     │ Student info refreshed  │                        ║
║                     │ Password changed        │                        ║
║                     │                         │                        ║
║                     │ [OK - Close Modal]      │                        ║
║                     └──────────┬──────────────┘                        ║
║                                │                                      ║
║                                ▼                                      ║
║                     Dashboard refreshes
║                     Modal closes
║                     New data displayed
║                                                                            ║
╚════════════════════════════════════════════════════════════════════════════╝


╔════════════════════════════════════════════════════════════════════════════╗
║ REAL-TIME DATA UPDATE FLOW (Automatic)                                     ║
║                                                                            ║
║  SCENARIO: Student makes a purchase at the canteen                         ║
║                                                                            ║
║  Timeline:                                                                 ║
║  ────────                                                                  ║
║                                                                            ║
║  2:50 PM                                                                   ║
║  ├─ Student buys 🍜 Lumpia for ₱80                                        ║
║  │  at canteen using wallet                                               ║
║  │                                                                         ║
║  │  POS system sends transaction to Firestore                             ║
║  │                                                                         ║
║  │  ┌─────────────────────────────────────┐                              ║
║  │  │ FIRESTORE DOCUMENT CREATED:         │                              ║
║  │  │ transactions/{transactionId}        │                              ║
║  │  │                                     │                              ║
║  │  │ {                                   │                              ║
║  │  │   lrn: "123456789012",              │                              ║
║  │  │   items: [                          │                              ║
║  │  │     {                               │                              ║
║  │  │       name: "Lumpia",               │                              ║
║  │  │       quantity: 1,                  │                              ║
║  │  │       unitPrice: 80,                │                              ║
║  │  │       total: 80                     │                              ║
║  │  │     }                               │                              ║
║  │  │   ],                                │                              ║
║  │  │   total: 80,                        │                              ║
║  │  │   timestamp: 2:50 PM,               │                              ║
║  │  │   status: "completed"               │                              ║
║  │  │ }                                   │                              ║
║  │  └──────────────────┬──────────────────┘                              ║
║  │                     │                                                  ║
║  │  2:50:05 PM         │ Firestore listeners                             ║
║  │  └─────────┬────────┼────────────────────────────────┐                ║
║  │            │        │                                │                ║
║  │            ▼        ▼ (Triggered)                    ▼                ║
║  │     ┌─────────────────────┐                 ┌─────────────────────┐   ║
║  │     │ Dashboard Listener  │                 │ Notification        │   ║
║  │     │ (transactions)      │                 │ Creator             │   ║
║  │     │                     │                 │                     │   ║
║  │     │ • Fetches new trans │                 │ Creates doc:        │   ║
║  │     │ • Adds to list      │                 │ notifications/{id}  │   ║
║  │     │ • Updates UI        │                 │                     │   ║
║  │     └──────────┬──────────┘                 │ {                   │   ║
║  │                │                           │   guardianId: ...,  │   ║
║  │                │                           │   type: "purchase", │   ║
║  │                ▼                           │   message: "Lumpia  │   ║
║  │     ┌────────────────────────┐             │   - ₱80",           │   ║
║  │     │ Recent Activity updated │             │   timestamp: 2:50PM │   ║
║  │     │ Shows new transaction   │             │ }                   │   ║
║  │     │                         │             │                     │   ║
║  │     │ TODAY                   │             └──────────┬──────────┘   ║
║  │     │ 🍜 Lumpia - ₱80 2:50 PM │                        │              ║
║  │     │ 🥤 Drinks - ₱30 1:45 PM │                        ▼              ║
║  │     │ 🍱 Rice Bowl - ₱150 1 PM│             ┌──────────────────────┐ ║
║  │     │                         │             │ Dashboard Listener   │ ║
║  │     └────────────┬────────────┘             │ (notifications)      │ ║
║  │                  │                         │                      │ ║
║  │                  ▼                         │ • Detects new notif  │ ║
║  │     ┌────────────────────────┐             │ • Adds to list       │ ║
║  │     │ Recalculate Today's    │             │ • Updates badge      │ ║
║  │     │ Spending               │             │ • Shows toast alert  │ ║
║  │     │                         │             │   "🍜 Lumpia - ₱80" │ ║
║  │     │ Total Today: ₱930      │             └─────────┬────────────┘  ║
║  │     │ (₱850 + ₱80)           │                       │                ║
║  │     │                         │                       ▼                ║
║  │     │ Spent: ₱930            │             ┌──────────────────────┐   ║
║  │     │ Limit: ₱1,000          │             │ Parent Sees:         │   ║
║  │     │ Remaining: ₱70         │             │                      │   ║
║  │     │                         │             │ ✅ NEW NOTIFICATION  │   ║
║  │     │ Progress Bar:           │             │ 🍜 Lumpia - ₱80      │   ║
║  │     │ ███████████░ 93%        │             │ 2:50 PM              │   ║
║  │     │                         │             │                      │   ║
║  │     │ ⚠️ WARNING (> 80%)      │             │ [Mark as read]       │   ║
║  │     │                         │             └──────────────────────┘   ║
║  │     │ Status: Yellow/Red      │                                       ║
║  │     └────────────┬────────────┘                                       ║
║  │                  │                                                     ║
║  │                  ▼                                                     ║
║  │     ┌────────────────────────────────┐                               ║
║  │     │ Parent Dashboard UI Updated    │                               ║
║  │     │                                │                               ║
║  │     │ ✓ Balance shows: ₱2,420        │                               ║
║  │     │ ✓ Recent Activity refreshed    │                               ║
║  │     │ ✓ Daily Limit bar at 93%       │                               ║
║  │     │ ✓ Status shows "WARNING"       │                               ║
║  │     │ ✓ Notification appeared        │                               ║
║  │     │ ✓ Notification bell badge: 1   │                               ║
║  │     │                                │                               ║
║  │     │ ALL CHANGES VISIBLE IN <1 SEC  │                               ║
║  │     └────────────────────────────────┘                               ║
║  │                                                                         ║
║  └─→ Parent monitors this in real-time!                                  ║
║                                                                            ║
║  2:50:30 PM                                                                ║
║  └─ Parent sees update and can decide to:                                ║
║     • Request a top-up (balance getting low)                              ║
║     • Check spending trend                                                ║
║     • Increase/decrease daily limit                                       ║
║     • Set alerts                                                           ║
║                                                                            ║
╚════════════════════════════════════════════════════════════════════════════╝


╔════════════════════════════════════════════════════════════════════════════╗
║                    🚪 LOGOUT FLOW                                          ║
║                                                                            ║
║  User clicks [🚪 LOGOUT] button (in header)                               ║
║                                                                            ║
║  ┌─────────────────────────────────────────────────┐                     ║
║  │ Confirm Logout?                                │                     ║
║  │ "Are you sure you want to log out?"             │                     ║
║  │                                                 │                     ║
║  │ [✅ YES, LOG OUT]  [❌ CANCEL]                 │                     ║
║  └──────────────────┬──────────────────────────────┘                     ║
║                     │                                                     ║
║         ┌───────────┴───────────┐                                        ║
║         │                       │                                        ║
║     ✅ YES                  ❌ CANCEL
║         │                       │
║         ▼                       ▼
║  Firebase Logout      Return to Dashboard
║  • signOut()          (No changes)
║  • Clear Auth token
║  • Stop listeners
║         │
║         ▼
║  Clear localStorage
║  • Remove username
║  • Remove role
║  • Remove personId
║         │
║         ▼
║  Firestore Listeners
║  • Unsubscribe from all
║  • Stop real-time updates
║         │
║         ▼
║  AuthContext Update
║  • user = null
║  • isAuthenticated = false
║         │
║         ▼
║  Redirect to /login
║         │
║         ▼
║  ┌─────────────────────────────────┐
║  │  LOGIN PAGE DISPLAYED           │
║  │  (Fresh login session ready)    │
║  │                                 │
║  │  Email:    [_____________]     │
║  │  Password: [_____________]     │
║  │                                 │
║  │  [LOGIN] [Forgot Password?]    │
║  │                                 │
║  │ ✓ Session ended                │
║  │ ✓ User logged out successfully  │
║  └─────────────────────────────────┘
║                                                                            ║
╚════════════════════════════════════════════════════════════════════════════╝


═══════════════════════════════════════════════════════════════════════════════

                              📊 USER FLOW SUMMARY

═══════════════════════════════════════════════════════════════════════════════

START
  │
  ├─ Login Page
  │  ├─ Enter Credentials
  │  ├─ Forgot Password? (Alternative path)
  │  └─ Submit
  │
  ├─ Firebase Authentication
  │  └─ Check role in Firestore
  │
  ├─ ROLE CHECK
  │  ├─ role=parent → ✅ Continue
  │  ├─ role=admin → ❌ Not implemented
  │  └─ role=staff → ❌ Not implemented
  │
  ├─ Parent Dashboard Load
  │  ├─ 6 Firestore Listeners Start
  │  ├─ Data Fetched
  │  └─ UI Renders
  │
  ├─ Dashboard Interactions
  │  ├─ (A) Monitor Spending
  │  │   ├─ View Balance
  │  │   ├─ Check Daily Limit
  │  │   ├─ View Trends
  │  │   └─ Review Activity
  │  │
  │  ├─ (B) Request Top-Up
  │  │   ├─ Click Top-Up
  │  │   ├─ Select Amount
  │  │   ├─ Scan QR / Send Payment
  │  │   ├─ Submit Request
  │  │   ├─ Admin Approves/Rejects
  │  │   └─ Parent Notified
  │  │
  │  ├─ (C) Manage Settings
  │  │   ├─ Update Student Info
  │  │   ├─ Update Guardian Info
  │  │   ├─ Change Password
  │  │   └─ Save Changes
  │  │
  │  └─ (D) Monitor Real-Time Updates
  │      ├─ New Purchase Alert
  │      ├─ Balance Updated
  │      ├─ Limit Status Changed
  │      └─ Notifications Appear
  │
  ├─ Logout
  │  ├─ Click Logout
  │  ├─ Confirm
  │  ├─ Clear Session
  │  └─ Return to Login
  │
  └─ END

═══════════════════════════════════════════════════════════════════════════════
