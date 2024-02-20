
# Ornate Table

Create visually captivating and interactive tables effortlessly in your React projects.

## Key Features:

**Simple API:** Build tables with minimal code, focusing on data and customization.

**Rich Interactivity:** Implement sorting, filtering, pagination, row selection, and more.

**Themes & Customization:** Easily style tables with built-in themes or create your own.

**Accessibility:** Ensure your tables are inclusive and usable for everyone.

**Mobile-Friendly:** Deliver optimized table experiences across devices.

**Lightweight:** Maintain optimal performance with a small bundle size.


## Usage

**Installation:** 

To get Ornate Table via the NPM package manager, open a terminal in your project directory and run the following command:

```bash
  npm install ornate-tables
```

**Basic Usage:**

**1. Import the library:**
```javascript
  import { OrnateTable } from 'ornate-tables';
```

**2. Prepare your data:**
```javascript
  const data = [
    { name: 'Donald', age: 12, city: 'Iringa' },
    { name: 'Fredrick', age: 9, city: 'Arusha' },
    { name: 'Peter', age: 5, city: 'Arusha' }
    { name: 'Paul', age: 5, city: 'Dar es Salaam' }
  ];
```

**3. Define your columns:**
```javascript
  const columns = [
    { name: 'Name', field: 'name' },
    { name: 'Age', field: 'age', sortable: true },
    { name: 'City', field: 'city' }
  ];
```

**4. Render the table:**
```javascript
<OrnateTable data={data} columns={columns} />
```

## Authors

- [@donkagunila](https://www.github.com/donkagunila)


## License

[MIT](https://choosealicense.com/licenses/mit/)

