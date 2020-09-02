import axios from "./axiosconfig";

// axios.get("/articles").then(({data}) => {
//     console.log(data.data);
// })

// axios.post("/articles", {title: "blah", tags: ["One", "two"], content: "random text"}).then(({data}) => {
//     console.log(data.data.id);
// })

// axios.get("/articles/74").then(({data}) => {
//     console.log(data.data);
// })

// axios.put("/articles/74", {title: "blah", tags: ["One", "two", "three"], content: "random text"}).then(({data}) => {
//     console.log(data.data.tags);
// })

// axios.delete("/articles/17").then(({data}) => {
//     console.log("Deleted");
// })

// axios.post("/articles/16/comments", {email: "test@gmail.com", comment: "La la la"}).then(({data}) => {
//     console.log(data.data.id);
// })

// axios.get("/articles/16/comments").then(({data}) => {
//     console.log(data.data);
// })

// axios.get("/tags").then(({data}) => {
//     console.log(data.data);
// })

// axios.get("/articles/80").then(({data}) => {
//     console.log(data.data);
// }, error => {
//     console.log("Not found");
// })

axios.get("/articles").then(({data}) => {
    console.log(data.data.map(article => article.title));
})