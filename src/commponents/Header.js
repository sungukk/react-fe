import React from "react";
import moment from "moment";
import "moment/locale/ko";

const Header = () => {
    return (
        <div className="py-5 bg-white rounded shadow-lg px-7">
            <header>
                <nav className="flex justify-between">
                    <div className="flex items-center pr-6 spacenpm-x-3 lg:pr-16">
                        <h2 className="text-2xl font-bold leading-6 text-gray-800">
                            오늘은 {moment().format('MMMM Do')}
                        </h2>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header;