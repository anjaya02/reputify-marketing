# Cookie Policy

**Effective Date:** [INSERT DATE]  
**Last Updated:** [INSERT DATE]

This Cookie Policy explains how Reputify ("we", "us", "our") uses cookies and similar tracking technologies on our platform.

---

## 1. What Are Cookies?

Cookies are small text files placed on your device when you visit a website. They help websites remember your preferences, understand how you use the site, and improve your experience.

---

## 2. Types of Cookies We Use

### 2.1 Essential Cookies (Strictly Necessary)

**Required for the platform to function properly. These cannot be disabled.**

| Cookie Name     | Purpose                                               | Duration      | Storage         |
| --------------- | ----------------------------------------------------- | ------------- | --------------- |
| `access_token`  | JWT authentication for API requests                   | 15-60 minutes | HttpOnly Cookie |
| `refresh_token` | Obtain new access tokens without re-login             | 7 days        | HttpOnly Cookie |
| `csrf_token`    | Protection against Cross-Site Request Forgery attacks | Session       | Cookie          |

> **Note:** Authentication tokens are stored as HttpOnly cookies for security, preventing JavaScript access and XSS attacks.

---

### 2.2 Functional Cookies (Preferences)

**Enhance user experience by remembering your preferences. You can disable these, but some features may not work as expected.**

| Cookie Name         | Purpose                                   | Duration | Storage       |
| ------------------- | ----------------------------------------- | -------- | ------------- |
| `theme`             | Remembers your dark/light mode preference | 1 year   | Local Storage |
| `locale`            | Stores your language/region preference    | 1 year   | Local Storage |
| `sidebar_collapsed` | Remembers sidebar state                   | 1 year   | Local Storage |
| `cookie_consent`    | Records your cookie consent choices       | 1 year   | Cookie        |

---

### 2.3 Analytics Cookies (Optional)

**Help us understand how users interact with our platform. These are only set if you accept analytics cookies.**

| Cookie Name | Provider         | Purpose                          | Duration |
| ----------- | ---------------- | -------------------------------- | -------- |
| `_ga`       | Google Analytics | Distinguishes unique users       | 2 years  |
| `_ga_<ID>`  | Google Analytics | Maintains session state          | 2 years  |
| `_gid`      | Google Analytics | Distinguishes users (short-term) | 24 hours |

---

## 3. Third-Party Services

We integrate with third-party services that may set their own cookies:

| Service              | Purpose                                  | Privacy Policy                                               |
| -------------------- | ---------------------------------------- | ------------------------------------------------------------ |
| **Google Analytics** | Usage analytics and platform improvement | [Google Privacy Policy](https://policies.google.com/privacy) |
| **PayHere**          | Payment processing for subscriptions     | [PayHere Privacy](https://www.payhere.lk/privacy-policy)     |

---

## 4. How We Use Cookies

We use cookies to:

- **Authenticate you** securely using JWT tokens
- **Protect your account** with CSRF tokens preventing unauthorized actions
- **Remember your preferences** like theme and display settings
- **Analyze platform usage** to improve features and performance (with consent)
- **Process payments** securely through our payment provider

---

## 5. Cookie Consent

### 5.1 Cookie Banner

When you first visit Reputify, you'll see a cookie consent banner where you can:

- ✅ **Accept All** — Enable all cookies including analytics
- ⚙️ **Customize** — Choose which optional cookies to allow
- ❌ **Reject Optional** — Only essential cookies will be used

### 5.2 Changing Your Preferences

You can change your cookie preferences at any time:

1. Go to **Settings** > **Privacy**
2. Adjust your cookie preferences
3. Changes take effect immediately

### 5.3 Browser Controls

You can also control cookies through your browser:

| Browser     | How to Manage Cookies                     |
| ----------- | ----------------------------------------- |
| **Chrome**  | Settings > Privacy and Security > Cookies |
| **Firefox** | Settings > Privacy & Security > Cookies   |
| **Safari**  | Preferences > Privacy > Cookies           |
| **Edge**    | Settings > Cookies and site permissions   |

---

## 6. Opting Out of Analytics

To opt out of Google Analytics tracking:

- Use the [Google Analytics Opt-out Browser Add-on](https://tools.google.com/dlpage/gaoptout)
- Or adjust your cookie preferences in Reputify Settings

---

## 7. Impact of Disabling Cookies

| Cookie Type    | What Happens If Disabled                          |
| -------------- | ------------------------------------------------- |
| **Essential**  | ❌ You cannot log in or use the platform          |
| **Functional** | ⚠️ Preferences reset each visit (theme, language) |
| **Analytics**  | ✅ No impact on platform functionality            |

---

## 8. Local Storage & Similar Technologies

In addition to cookies, we use:

| Technology          | Purpose                            | Data Stored                   |
| ------------------- | ---------------------------------- | ----------------------------- |
| **Local Storage**   | Store user preferences client-side | Theme, locale, UI state       |
| **Session Storage** | Temporary data for current session | Form drafts, navigation state |

These are cleared when you clear your browser data.

---

## 9. Data Retention

| Cookie Type   | Retention Period                       |
| ------------- | -------------------------------------- |
| Access Token  | 15-60 minutes (configurable)           |
| Refresh Token | 7 days                                 |
| Preferences   | 1 year                                 |
| Analytics     | Per Google's retention (up to 2 years) |

---

## 10. Updates to This Policy

We may update this Cookie Policy when we add new features or change our cookie usage. Material changes will be communicated via:

- In-app notification
- Updated "Last Updated" date on this page

---

## 11. Contact Us

For questions about our use of cookies:

**Reputify**  
Email: support@reputify.lk  
General Inquiries: info@reputify.lk  
Website: https://reputify.lk

---

_By continuing to use Reputify, you consent to our use of cookies as described in this policy._
