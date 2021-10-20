
##Question 1: Hello,

I'm new to search engines, and there are a lot of concepts I'm not educated on. To make my onboarding smoother, it'd help if you could provide me with some definitions of the following concepts:

    Records
    Indexing

I'm also struggling with understanding what types of metrics would be useful to include in the "Custom Ranking."

Cheers, George


##Answer 1:

Hi George,

thank you for reaching out to me regarding your questions.
Very high level spoken, a search index is basically a kind of content catalog.
Yet, you don't directly connect to your assets but go by records which do represent your assets in the index. 
There is multiple ways how to create such an index, either by crawling, submitting prepared records, API calls... 
For improving your search result quality, you do have the possibility to define "custom rankings" which do rely on measurable values representing the relative relevance of your records.

Best,
David



##Question 2: Hello,

Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.

Regards, Matt


##Answer 2

Hi Matt,

thank you for reaching out to me with your feedback.
I feel your frustration, yet, to prevent accidential index clearing or deleting by UI, it does absolutely make sense to have such operations several clicks away.
For your described use case needing these features while iterating, it might be more conveniant to use equivalent API calls.

Best,
David







Question 3: Hi,

I'm looking to integrate Algolia in my website. Will this be a lot of development work for me? What's the high level process look like?

Regards, Leo


##Answer 3

Hi Leo,

to be very honest, your question triggers me a bit for an "it depends" answer.
Seriously, it does depend on what exactly you are doing with your website, like how much content you are consuming from external sources, how many systems you have running on your project.... in short: the overall complexity of your current website.

However, the basic high level process is pretty straight forward:
- you fetch you data from your data source
- you transform that data into JSON records
- you send the records to Algolia and creat an index by Dashboard, API or manually
- you define your relevance settings by configuration
- you develop a search UI and add this to your website

Yet, as previously said, the process might get more complex when dealing with especially multiple systems.

Best,
David

