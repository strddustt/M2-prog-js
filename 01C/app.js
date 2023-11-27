
class App
{
    runApplication()
    {
        console.log("hello world!");
        //code hier
        this.greeting = "starting up";
        this.appName = "app 👍"
        this.verNum = 0.1
        this.verDate = new Date("september 20 2023 14:54:16")
        this.author = "Aidan Jones"
        this.copyright = "none cuz i'm cool"
        this.distributor = "dunno"
        this.darkmode = false
        let string = "1"
        let int = 5
        let boolean = true
        console.log(string, int, boolean)
        this.boolean = true
        this.string = "grrr white people"
        this.int = 3

    }
}

let app = new App();
app.runApplication();

console.log(app.greeting);
console.log("appnaam: " + app.appName);
console.log("version nr: " + app.verNum);
console.log("version date: " + app.verDate);
console.log("author: " + app.author);
console.log("copyright: " + app.copyright);
console.log("distributor: " + app.distributor);
console.log("darkmode: " + app.darkmode);
console.log("boolean " + app.boolean);
console.log("string " + app.string);
console.log("integer " + app.int)
