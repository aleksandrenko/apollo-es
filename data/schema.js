const typeDefinitions = `

enum Episode { NEWHOPE, EMPIRE, JEDI }
scalar Url

type Friend {
  id: ID!
  name: String
  homepage: Url
  friends: [Friend]
  friend_since: String
}

type Person {
 id: ID!
 name: String
 homepage: Url
 friends: [Friend]
 interests: [Interest]
}

type Activity {
  id: ID!
  name: String!
  location: Location
  type: Interest
}

type Interest {
  id: ID!
  name: String!
}

type Photo {
  id: ID!
  name: String!
  url: Url!
  location: Location
}

type Location {
  id: ID!
  name: String
  latlng: String!
}

type Query {
  users: [Person]
  activities: [Activity]
  interests: [Interest]
}

schema {
  query: Query
}
`;

export default [typeDefinitions];
