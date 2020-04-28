## Building an ERD 

### Example of ERD box

+------------+  
| school     |
+------------+
| id PK      |
|   name     |
|  location  |
|  rating    |
|  type      |
| has_uniform|
+------------+

+------------+
| student    |
+------------+
|     id PK  |
|       name |
|  DOB       |
|school_id FK|
| is_passing |
|            |
+------------+

+------------+
| classes    |
+------------+
|      id PK |
|   subj     |
|stud_id FK  |
|school_id FK|
|            |
|            |
+------------+

### Description of your relationship

Type here

### ERD describing the relationship

'Draw' here
