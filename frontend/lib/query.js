export const PRODUCT_QUERY = `
query{
	products {
    data {
      attributes {
        title
        description
        price
        slug
        image {
          data {
            attributes {
              formats
            }
          }
        }
      }
    }
  }
}
`;
