# Service Level Agreement (SLA)

**Effective Date:** [INSERT DATE]  
**Last Updated:** [INSERT DATE]

This Service Level Agreement ("SLA") describes the service levels and support commitments for Reputify's AI-powered reputation management platform.

---

## 1. Scope

This SLA applies to all paid subscription tiers:

| Plan             | Monthly Price (LKR) | Monthly Price (USD) |
| ---------------- | ------------------- | ------------------- |
| **Starter**      | LKR 2,990           | USD 19              |
| **Professional** | LKR 8,990           | USD 49              |
| **Enterprise**   | LKR 19,990          | USD 99              |

Free trial accounts are not covered under this SLA.

---

## 2. Service Availability

### 2.1 Uptime Commitment

| Subscription Tier | Monthly Uptime Guarantee |
| ----------------- | ------------------------ |
| **Starter**       | 99.0%                    |
| **Professional**  | 99.5%                    |
| **Enterprise**    | 99.9%                    |

### 2.2 Uptime Calculation

**Monthly Uptime %** = (Total Minutes − Downtime) / Total Minutes × 100

Where:

- **Total Minutes** = All minutes in the calendar month
- **Downtime** = Minutes when core services are unavailable (excluding Exclusions)

### 2.3 Core Services

The uptime commitment applies to:

| Service               | Description                     |
| --------------------- | ------------------------------- |
| **Dashboard Access**  | Ability to log in and view data |
| **API Availability**  | Backend API responsiveness      |
| **Review Collection** | Platform data synchronization   |
| **AI Analysis**       | Sentiment and intent processing |
| **Alerts**            | Notification delivery           |

---

## 3. Scheduled Maintenance

### 3.1 Maintenance Windows

| Type                      | Timing                          | Notice         |
| ------------------------- | ------------------------------- | -------------- |
| **Standard Maintenance**  | Sundays, 2:00 AM - 6:00 AM SLST | 24 hours       |
| **Emergency Maintenance** | As needed for critical issues   | Minimal notice |

**SLST** = Sri Lanka Standard Time (UTC+5:30)

### 3.2 Maintenance Communication

Scheduled maintenance announced via:

- Email notification
- In-app banner
- Status page: **status.reputify.lk**

---

## 4. Service Credits

### 4.1 Credit Eligibility

If we fail to meet the uptime commitment:

| Monthly Uptime | Service Credit      |
| -------------- | ------------------- |
| 99.0% − 99.9%  | 10% of monthly fee  |
| 95.0% − 98.99% | 25% of monthly fee  |
| 90.0% − 94.99% | 50% of monthly fee  |
| Below 90.0%    | 100% of monthly fee |

### 4.2 Credit Request Process

1. **Email:** support@reputify.lk (Subject: SLA Credit Request)
2. **Include:**
   - Account email
   - Date(s) and time(s) of downtime
   - Description of impact
3. **Submit within:** 30 days of the incident
4. **Review:** Within 10 business days
5. **Application:** Credits applied to next billing cycle

### 4.3 Credit Limitations

- Maximum credit: 100% of monthly fee for that month
- Credits are not transferable or redeemable for cash
- Credits expire after 12 months if unused
- Annual plans: Prorated monthly credit calculation

---

## 5. Exclusions

The uptime commitment does **NOT** apply during:

| Exclusion                         | Reason                           |
| --------------------------------- | -------------------------------- |
| Scheduled maintenance windows     | Pre-announced, expected          |
| Emergency security patches        | Critical protection              |
| Force majeure                     | Natural disasters, war, etc.     |
| Internet connectivity issues      | Outside our control              |
| Third-party API outages           | Google, Facebook, etc.           |
| DDoS attacks                      | Mitigated within reasonable time |
| Issues caused by customer actions | Misconfigurations, misuse        |
| Beta/preview features             | Experimental                     |

---

## 6. Third-Party Platform Dependencies

Reputify relies on external platforms for data collection:

| Platform                | Method         | Our Control |
| ----------------------- | -------------- | ----------- |
| Google Business Profile | Official API   | Limited     |
| YouTube                 | Data API v3    | Limited     |
| Reddit                  | Apify Scraper  | Flexible    |
| Instagram               | Apify scraping | Limited     |
| TikTok                  | Apify scraping | Limited     |
| Facebook                | Apify scraping | Limited     |
| LinkedIn                | Apify scraping | Limited     |
| X (Twitter)             | Apify scraping | Limited     |

**Important:** We cannot guarantee availability when third-party services are down or rate-limited. These outages are excluded from SLA calculations.

---

## 7. Support Services

### 7.1 Support Channels

| Channel                         | Availability                          |
| ------------------------------- | ------------------------------------- |
| **Email** (support@reputify.lk) | 24/7 receipt, business hours response |
| **In-App Chat**                 | Business hours (SLST)                 |
| **Knowledge Base**              | 24/7 self-service                     |

### 7.2 Response Time by Tier

| Priority     | Starter         | Professional | Enterprise |
| ------------ | --------------- | ------------ | ---------- |
| **Critical** | 24 hours        | 4 hours      | 1 hour     |
| **High**     | 48 hours        | 8 hours      | 4 hours    |
| **Medium**   | 72 hours        | 24 hours     | 8 hours    |
| **Low**      | 5 business days | 48 hours     | 24 hours   |

### 7.3 Issue Priority Definitions

| Priority     | Definition                     | Examples                                 |
| ------------ | ------------------------------ | ---------------------------------------- |
| **Critical** | Service completely unavailable | Cannot log in, total outage, data breach |
| **High**     | Major feature unavailable      | Cannot view reviews, alerts not sending  |
| **Medium**   | Feature partially impaired     | Slow performance, minor UI issues        |
| **Low**      | General inquiries              | How-to questions, feature requests       |

---

## 8. Support Hours

|                         | Hours (SLST)                                 |
| ----------------------- | -------------------------------------------- |
| **Business Hours**      | Monday - Friday, 9:00 AM - 6:00 PM           |
| **Holidays**            | Sri Lankan public holidays (limited support) |
| **Enterprise Extended** | Per contract agreement                       |

---

## 9. Escalation Process

If your issue is not resolved satisfactorily:

| Level       | Contact         | When            |
| ----------- | --------------- | --------------- |
| **Level 1** | Support Team    | Initial contact |
| **Level 2** | Support Manager | After 48 hours  |
| **Level 3** | Product Team    | After 72 hours  |
| **Level 4** | Executive Team  | After 1 week    |

**To escalate:** Email admin@reputify.lk (Subject: Escalation - Ticket #XXXXX)

---

## 10. Data Backup and Recovery

### 10.1 Backup Schedule

| Backup Type              | Frequency            | Retention       |
| ------------------------ | -------------------- | --------------- |
| **Database (MongoDB)**   | Daily                | 30 days rolling |
| **Platform Credentials** | Encrypted, real-time | Continuous      |

### 10.2 Recovery Time Objectives

| Scenario          | Recovery Time Objective (RTO) |
| ----------------- | ----------------------------- |
| Minor incident    | 4 hours                       |
| Major incident    | 8 hours                       |
| Disaster recovery | 24 hours                      |

---

## 11. Performance Targets

| Metric                           | Target                    |
| -------------------------------- | ------------------------- |
| **API Response Time**            | < 500ms (95th percentile) |
| **Dashboard Load Time**          | < 3 seconds               |
| **Review Sync Delay (APIs)**     | < 15 minutes              |
| **Review Sync Delay (Scraping)** | < 8 hours                 |
| **Sentiment Analysis**           | < 300ms per review        |
| **AI Reply Generation**          | < 5 seconds               |

---

## 12. Status Page

Real-time service status: **https://status.reputify.lk**

Subscribe to receive incident notifications via email.

---

## 13. SLA Modifications

We may modify this SLA with 30 days' notice. Changes become effective on the next billing cycle. Material changes will be communicated via email.

---

## 14. Contact Information

**Reputify - SLA Support**  
Email: support@reputify.lk  
Escalations: admin@reputify.lk  
Status Page: https://status.reputify.lk

---

_This SLA is incorporated into and subject to the Terms of Service._
