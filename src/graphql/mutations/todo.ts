import gql from 'graphql-tag';

export const INSERT_TODO_TAGS = gql`
  mutation($tags: [tag_insert_input!]!) {
    insert_tag(objects: $tags) {
      affected_rows
      returning {
        id
      }
    }
  }
`;
