import { Component } from "@angular/core"

@Component({
    selector: "app-username",
    templateUrl: "./username.component.html"
})
export class UserName {
    userName='fethiEfe';
    resetUsername(){
        this.userName = ""
    }
}