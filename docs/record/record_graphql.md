---
  sidebar_position: 3
  id: record_graphql
  title: GraphQL client query record
  tags:
    - GraphQL
---

#### HTTP HEADERS

```
    {"Authorization": "Bearer token位置"}
```

#### QUERY VARIABLES
```
    {
        "query": {
            "tagIds": [],
            "page": {
            "page": 4,
            "size": 10
            }
        }
    }
```

#### Query

```
query GetAccountsQuery{
  getAccounts(query:{page:{page:0, size: 10}, tagIds: []}){
    content{
      id
      accountName
      accountOwner{
        name
        email
        description
      }
    },
    pageInfo{
      size
      number
      totalPages
      totalElements
    }
  }
}

```

```
query AccountsQuery($query: AccountQuery){
  getAccounts(query: $query){
    content{
      id
      accountName
      phone
    }
    pageInfo{
      number
      size
      totalElements
    }
  }
}

```

#### mutation

```
    mutation CreateOpportunityQuery{
        createOpportunity(input:{
            opportunityName:"測試",  
            nextStep:"下一步",
            orderNumber:"123456789", 
            mainCompetitors:"competitor",
            currentGenerators:"poppy",  
            trackingNumber:"938498",
            deliveryStatusId:"e24d6de1-4887-11ea-bb91-aad51d2c9554",  
            opportunitySourceId:"e24d6dd4-4887-11ea-bb91-aad51d2c9554",
            accountId:"d8b4d36b-87d9-11ec-994d-aad51d2c9554",  
            typeId:"e24d6df1-4887-11ea-bb91-aad51d2c9554",  
            stageId:"e24d6de9-4887-11ea-bb91-aad51d2c9554",  
            closeDate:"2022-03-30T03:15:34.184Z",
            probability:33,
            amount:220,
            description:"描述描述描述" 
        }) 
        {
            id
        }
    } 
```