/* Notes
belongs to one Car
belongs to one User (only creating user has permission to edit/delete)
*/
export default [
    {
      id: '1',
      content: 'Note 1',
      created_at: 'date',
      updated_at: 'date',
      car_id: 'mazda',
      user_id: 'user-test'
    },
    {
        id: '2',
        content: "Note 2, <strong>bold text</strong> <a href='http://localhost:3000/'>link</a> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        created_at: 'awd',
        updated_at: 'date',
        car_id: 'mazda',
        user_id: 'other-user-test'
    }
  ];