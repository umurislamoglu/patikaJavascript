import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';


import Header from "./Header";
import React from 'react';
import EmojiResultsRow from "./EmojiResultRow";
import App from "./App";


describe("Emoji Search All Tests", () => {

    beforeEach(() => {
        render(<App />);
    })

    test("Header renders correctly", () => {
        render(<Header />);

        const title = screen.getByText('Emoji Search'); //i=> büyük küçük harf 
        expect(title).toBeInTheDocument();
    });

    test("Emoji List renders correctly", () => {
        render(<EmojiResultsRow />);

        const emojiList = screen.getAllByTestId("emojiRow");
        expect(emojiList.length).toEqual(20);
    });

    test("Filter test ", () => {
        const writed = screen.getByText(/heart eyes/i)
        const notExist = screen.getByText(/wink/i);
        userEvent.type(input, writed);
        expect(screen(notExist)).not.toBeInTheDocument;
    });

    test("should copy on click emoji", () => {

        const row = screen.getAllByTestId("emojiRow");
        expect(copy).toHaveBeenCalled();
    })
});