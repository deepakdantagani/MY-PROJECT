// query HeroComparison($first: Int = 3) {
//   leftComparison: hero(episode: EMPIRE) {
//     ...comparisonFields
//   }
//   rightComparison: hero(episode: JEDI) {
//     ...comparisonFields
//   }
// }

// fragment comparisonFields on Character {
//   name
//   friendsConnection(first: $first) {
//     totalCount
//     edges {
//       node {
//         name
//       }
//     }
//   }
// }
