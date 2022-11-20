## Speck API
| Name | Routes | HTTP | Description | Middleware Auth |
|------|--------|------|-------------|-----------------|
| CMS |
| Categories | 
|            | `/api/v1/cms/categories` | GET | Get all categories | Yes |
|            | `/api/v1/cms/categories` | POST | Post one category | Yes |
|            | `/api/v1/cms/categories/:id` | GET | Get one category by id | Yes |
|            | `/api/v1/cms/categories/:id` | PUT | Update one category by id | Yes |
|            | `/api/v1/cms/categories/:id` | DELETE | Delete one category by id | Yes |
| Talents    | 
|            | `/api/v1/cms/talents` | GET | Get all talents | Yes |
|            | `/api/v1/cms/talents` | POST | Post one talent | Yes |
|            | `/api/v1/cms/talents/:id` | GET | Get one talent by id | Yes |
|            | `/api/v1/cms/talents/:id` | PUT | Update one talent by id | Yes |
|            | `/api/v1/cms/talents/:id` | DELETE | Delete one talent by id | Yes |
| Images     | 
|            | `/api/v1/cms/images` | POST | Create image | Yes |
| Events     | 
|            | `/api/v1/cms/events` | GET | Get all events | Yes |
|            | `/api/v1/cms/events` | POST | Post one event | Yes |
|            | `/api/v1/cms/events/:id` | GET | Get one event by id | Yes |
|            | `/api/v1/cms/events/:id` | PUT | Update one event by id | Yes |
|            | `/api/v1/cms/events/:id/status` | PUT | Update one event status by id | Yes |
|            | `/api/v1/cms/events/:id` | DELETE | Delete one event by id | Yes |
| Payments   | 
|            | `/api/v1/cms/payments` | GET | Get all payments | Yes |
|            | `/api/v1/cms/payments` | POST | Post one payment | Yes |
|            | `/api/v1/cms/payments/:id` | GET | Get one payment by id | Yes |
|            | `/api/v1/cms/payments/:id` | PUT | Update one payment by id | Yes |
|            | `/api/v1/cms/payments/:id` | DELETE | Delete one payment by id | Yes |
| Ticket Categories   | 
|            | `/api/v1/cms/ticket-categories` | GET | Get all ticket categories | Yes |
|            | `/api/v1/cms/ticket-categories` | POST | Post one ticket-category | Yes |
|            | `/api/v1/cms/ticket-categories/:id` | GET | Get one ticket-category by id | Yes |
|            | `/api/v1/cms/ticket-categories/:id` | PUT | Update one ticket-category by id | Yes |
|            | `/api/v1/cms/ticket-categories/:id` | DELETE | Delete one ticket-category by id | Yes |
| Orders     | 
|            | `/api/v1/cms/orders` | GET | Get all orders | Yes |
|            | `/api/v1/cms/orders/:id` | GET | Get one order by id | Yes |
| Auth       | 
|            | `/api/v1/auth/signin` | POST | Sign in | No |
|            | `/api/v1/cms/organizers` | POST | Create admin / organizer | Yes |
| Participants | 
|            | `/api/v1/events` | GET | Get all events | No |
|            | `/api/v1/events/:id` | GET | Get one event by id | No |
|            | `/api/v1/events/:id/checkout` | POST | Create checkout event | Yes |
|            | `/api/v1/dashboard` | GET | Get dashboard | Yes |
|            | `/api/v1/dashboard/:id` | GET | Get dashboard by id  | Yes |
|            | `/api/v1/participants/auth/signin` | POST | Sign in  | No |
|            | `/api/v1/participants/auth/signup` | POST | Sign up  | No |

### Get all categories
Method GET
<br />
`http://[host]:[port]/api/v1/cms/categories` 
<br />
<br />
Response body <br />
```
{
  "data": [
    {
      "id": int,
      "name": string
    }
  ]
}
```
