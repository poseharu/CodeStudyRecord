const quotes = [
  {
    quote: "power1",
    author: "Disney1"
  },
  {
    quote: "power2",
    author: "Disney2"
  },
  {
    quote: "power3",
    author: "Disney3"
  },
  {
    quote: "power4",
    author: "Disney4"
  },
  {
    quote: "power5",
    author: "Disney5"
  },
  {
    quote: "power6",
    author: "Disney6"
  },
  {
    quote: "power7",
    author: "Disney7"
  },
  {
    quote: "power8",
    author: "Disney8"
  },
  {
    quote: "power9",
    author: "Disney9"
  },
  {
    quote: "power10",
    author: "Disney10"
  }
]

const quote = document.querySelector("div#quote span:first-child");
const author = document.querySelector("div#quote span:last-child");
const randomNum = Math.floor(Math.random() * quotes.length);

quote.innerHTML = quotes[randomNum].quote;
author.innerHTML = quotes[randomNum].author;