let technologies = ['NodeJs', 'ReactJs', 'DenoJs', 'NestJs', 'NextJs'];

console.log("Using for loop:");
for (let i = 0; i < technologies.length; i++) {
    console.log(technologies[i]);
}

console.log("Using for...of:");
for (let tech of technologies) {
    console.log(tech);
}

console.log("Using forEach:");
technologies.forEach(function(item) {
    console.log(item);
});
