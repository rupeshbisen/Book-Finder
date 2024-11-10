import './App.css'
import SearchBar from './components/SearchBar'
import BookList from './components/BookList'

export default function App() {

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Book Finder</h1>
      <SearchBar />
      <BookList />
    </div>
  );
}

