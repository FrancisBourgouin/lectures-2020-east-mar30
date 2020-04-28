## Building an ERD 

### Example of ERD box

+------------+
| TITLE HERE |
+------------+
|            |
|            |
|            |
|            |
|            |
|            |
+------------+

### Description of your relationship

A one to many relationship between pets and owners where an owner can have multiple pets and a pet can have only one owner.

### ERD describing the relationship

'+------------+
|  Pet       |
+------------+
|   id       | PK
|   name     |
|   breed    |
|   species  |
|   owner_id | FK
|            |     
+------------+       
  ^ ^ ^
    |
    |           +------------+
    |           | Owner      |
    |            +------------+
    |           |    id      | PK
    |           |   name     |
    |           |   address  |
    |           |   phone    |
     ---------> |   email    |
                |            |
                +------------+
