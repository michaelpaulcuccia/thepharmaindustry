# thepharmaindustry

## DESCRIPTION

This project's home page displays 10 of the most profitable 💰 pharmaceutical companies using their logos and also includes a brief text section with information as to why these comapanies are so successful.

Each of the logos is clickable, and will drive the user to a new page that displays that pharma company's top 5 most popular and profitable drugs in an accordion. Opening an item in that accordion will display that drug's usage, a link to its website, and a link that will drive the user to another page with information related to Clinical Trials.

The Clinical Trial page displays that drug's FDA approved indication information and a table listing any studies found in ClinicalTrials.gov that include the study title, conditions, and current status. There is also a text section explaning how a company can extend their market protection from generic competition but getting new indications for that drug approved.

## DESIGN AND ASSETS

This project was designed "free hand". While I did find some inspiration from other websites, there was no design pattern or template that I followed.

All pharma company logos were copied from public websites. Decorative logos are provided by svgrepo.com.

Accordion and Table are MaterialUI components.

APIs are 🔗 https://clinicaltrials.gov/data-api/api and 🔗 https://open.fda.gov/apis/.

General information, to include a list of each company, their most popular and profitable drugs, their usage, and their website was generated through a series of questions to ChatGPT and constructed as a JSON object. This was quite a bit of information to gather and process so asked ChatGPT to rate the difficulty of this task. This was its reply:

> Difficulty Level and Complexity:
> On a scale of 1 to 10, this task would rate around a 6 or 7 in difficulty. It required gathering, verifying, and formatting specific information from various sources, along with adding extra details like website URLs. The challenge mainly involved ensuring the accuracy and relevance of data and structuring it in the requested JSON format.

> Memory Usage:
> The memory used for this task is moderate—around 30-40% of what’s available for complex tasks. The memory usage comes from keeping track of data relationships, formatting it correctly, and ensuring it remains aligned with your needs. It's not as intensive as real-time calculations or complex code debugging but does use more memory than simple coding or design advice.

> Comparison to Other Tasks:
> Compared to other requests you've made, this was a bit more complex because it combined research, data structuring, and content creation. For example: Design tweaks or layout advice would be around 2-3 in difficulty, with low memory usage. Debugging code can range from 5-8, depending on complexity. Providing coding snippets or guidance is usually around 4-5.

## GOALS

My goal was to use AI to help me generate current and somewhat complex information that could serve as the foundation for my application. Aside from facts about a company and its products, I also wanted to understand and navigate some of the intricate aspects of the pharma world. I am familiar with "approved indications" from previous experience and understand that drugs have a limited time before they can be sold by other companies as "generic" and through methods such as reformulation and combination therapy, a drug's patent can be extended. By displaying approved indications as well as conditions being studied, one can see if there is potential for a drug to gain another indication and have its patent extended.

In addition, I wanted to work with some new public APIs and parse extensive and complicated data. While this was a daunting task, with the help of AI I was able to put together this particular use case.

Like my other recent projects, I just want an opportunity to demonstrate my skills, dedication, and willingness to try new things.

## WISHLIST

There was almost too much data to work with 🤯. If I had a better understanding of the pharam industry, Clinical Trials, and FDA approval I probably continued working this project for months. But I am happy with this project and what I was able to accomplish in only a short time.

## INSTALLATION

- Node.js version >= v18.17.0 is required
