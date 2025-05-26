import { includeUpdatableResource } from "./include-updatable-resource";

// PRACTICE: implement includeUpdatableResource to edit a books' data
export const BookInfoForm = includeUpdatableResource(
  ({ book, onChangeBook, onPostBook, onResetBook }) => {
    const { name, price, title, pages } = book || {};

    return book ? (
      <>
        <label>
          Name:
          <input
            value={name}
            onChange={e => onChangeBook({ name: e.target.value })}
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            value={price}
            onChange={e => onChangeBook({ price: Number(e.target.value) })}
          />
        </label>
        <label>
          Title:
          <input
            value={title}
            onChange={e => onChangeBook({ title: e.target.value })}
          />
        </label>
        <label>
          Pages:
          <input
            type="number"
            value={pages}
            onChange={e => onChangeBook({ pages: Number(e.target.value) })}
          />
        </label>

        <button onClick={onResetBook}>Reset</button>
        <button onClick={onPostBook}>Save</button>
      </>
    ) : (
      <h3>Loading...</h3>
    );
  },
  "/books/1",
  "book"
);
<h3>Loading...</h3>;
