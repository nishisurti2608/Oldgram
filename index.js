const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];
document.addEventListener("DOMContentLoaded", function () {
  const postsContainer = document.getElementById("posts-container");
  postsContainer.innerHTML = posts.map(
    (post) => `
        <section class="center-contain">
            <div class="container">
                <div class="user-profile"> 
                    <img class="avatar" src="${post.avatar}" alt="${post.name}">
                    <div class="user-info">
                        <p>${post.name}</p>
                        <span>${post.location}</span>
                    </div>
                </div>
                
                <img class="post-img" src="${post.post}" alt="Post by ${post.name}">
                
                <div class="extra-features">
                    <img class="feature" src="images/icon-heart.png" alt="Like">
                    <img class="feature" src="images/icon-comment.png" alt="Comment">
                    <img class="feature" src="images/icon-dm.png" alt="Share">
                </div>

                <div class="likes">
                    <p>${post.likes} likes</p>
                </div>

                <div class="comment">
                    <span>${post.username}</span>
                    <p>${post.comment}</p>
                </div>
            </div>
        </section>
    `
  );
});
