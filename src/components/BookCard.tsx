
import { Docs } from "../types/Book";

interface BookCardProps {
    books: Docs[];
}

export default function BookCard({ books }: BookCardProps) {
    console.log(books);
    return (
        <div>
            {
                books?.map((book, index) => (
                    <div key={index} className="border rounded-md p-4 mb-2 w-full flex flex-wrap gap-5 ">
                        <div className="w-32 h-40 border rounded-md bg-slate-300 p-2">
                            <div className="w-full h-full border border-white"></div>
                        </div>
                        <div className="flex flex-col items-start">
                            <h2 className="text-lg font-bold text-start">{book.title}</h2>

                            {book?.author_name &&
                                <div className="flex flex-wrap items-center space-x-2">
                                    <span>by </span>
                                    {
                                        book?.author_name?.map((author, index) => (
                                            <p key={index} className="text-sm text-slate-500 ">{` ${author},`}</p>
                                        ))
                                    }
                                </div>
                            }
                            {book?.language &&
                                <div className="flex items-center space-x-2">
                                    <h4>Language</h4>
                                    {
                                        book?.language?.map((language, index) => (
                                            <p key={index} className="text-sm text-slate-400">{`${language},`}</p>
                                        ))
                                    }
                                </div>
                            }
                        </div>

                    </div>
                ))
            }
        </div>
    )
}

