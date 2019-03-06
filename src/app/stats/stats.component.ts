import { Component, OnInit, ViewChild, ElementRef, Input } from "@angular/core";
import { User } from "../user";
@Component({
  selector: "app-stats",
  templateUrl: "./stats.component.html",
  styleUrls: ["./stats.component.less"]
})
export class StatsComponent implements OnInit {
  @ViewChild("myCanvas") canvasRef: ElementRef;
  @Input() id: number;
  users: User[];
  data = [0, 0];
  total = 0;
  lastend = 0;
  colors = ["navy", "violet"];
  w = 400;
  h = 400;
  constructor() {}

  ngOnInit() {
    let c: CanvasRenderingContext2D = this.canvasRef.nativeElement.getContext(
      "2d"
    );

    this.users = JSON.parse(sessionStorage.getItem("users"));
    this.users.forEach((user: User) => {
      if (user.gender === "male") {
        this.data[0]++;
      } else {
        this.data[1]++;
      }
    });
    this.data.forEach(item => (this.total += item));
    this.w = this.h = 500;
    for (let i = 0; i < this.data.length; i++) {
      c.fillStyle = this.colors[i];
      c.beginPath();
      c.moveTo(this.w / 2, this.h / 2);
      c.arc(
        this.w / 2,
        this.w / 2,
        this.w / 2,
        this.lastend,
        this.lastend + Math.PI * 2 * (this.data[i] / this.total),
        false
      );
      c.lineTo(this.w / 2, this.h / 2);
      c.fill();
      this.lastend += Math.PI * 2 * (this.data[i] / this.total);
    }
  }
}
