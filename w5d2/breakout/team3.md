## Building an ERD 

### Example of ERD box - Music Family Subscription Service

+------------+
| ACCOUNT    |
+------------+
| id (PK)    |
| email      |
| password   |
| payment_method |
|            |
|            |
+------------+

+------------+
| USER       |
+------------+
|  id (PK)   |
|  name      |
|  avatar    |
| has_playlist |
| is_owner   |
| account_id (FK) |
+------------+

### Description of your relationship

These tables describes the relationship between a 
subscription type service platform account (Netflix, Apple Music, Spotify etc.) and it's dependant users.


### ERD describing the relationship

'Draw' here
