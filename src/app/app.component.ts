import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { never } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  screen: {
    x: any,
    y: any
  }
  checkPointGenerate: boolean = false
  findedGroup: string
  massCenters: {
    red: {
      x: number,
      y: number
    },
    blue: {
      x: number,
      y: number
    },
    green: {
      x: number,
      y: number
    }
  }
  pisagor: {
    red: number,
    blue: number,
    green: number
  }
  euklid: {
    red: number,
    blue: number,
    green: number
  }
  pointsx: number[] = []
  pointsy: number[] = []
  coordinatesRedX: number[] = []
  coordinatesBlueX: number[] = []
  coordinatesGreenX: number[] = []
  coordinatesRedY: number[] = []
  coordinatesBlueY: number[] = []
  coordinatesGreenY: number[] = []
  pointForm: FormGroup
  @ViewChild('canvas', { static: true }) 
  canvas: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;
  constructor(private formBuilder: FormBuilder) {
    this.pointForm = this.formBuilder.group({
      x: '',
      y: '',
      method: ''
    });
  }
  ngOnInit() {
    this.screen = {x: window.innerWidth, y: window.innerHeight}
    this.massCenters = {red: {x: 0, y: 0}, blue: {x: 0, y: 0}, green: {x: 0, y:0}}
    this.pisagor = {red: 0, blue: 0, green: 0}
    this.euklid = {red: 9999, blue: 9999, green:9999}
  }
  start(){
    this.checkPointGenerate=true
    this.screen = {x: window.innerWidth, y: window.innerHeight}
    console.log(this.screen)
    this.randomPointGenerate(1);
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.ctx.fillStyle = 'red';
    for (let i = 0; i < 100; i++) {
      this.ctx.fillRect(this.pointsx[i], this.pointsy[i], 5, 5);
    }
    this.ctx.fillStyle = 'blue';
    this.randomPointGenerate(2)
    for (let i = 0; i < 100; i++) {
      this.ctx.fillRect(this.pointsx[i], this.pointsy[i], 5, 5);
    }
    this.ctx.fillStyle = 'green';
    this.randomPointGenerate(3)
    for (let i = 0; i < 100; i++) {
      this.ctx.fillRect(this.pointsx[i], this.pointsy[i], 5, 5);
    }
  }
  randomPointGenerate(value: any){
    this.pointsx = []
    this.pointsy = []
    var totalx: number = 0, totaly: number = 0
    screenX = this.screen.x
    screenY= this.screen.y
    for (let i = 0; i < 100; i++) {
      let element = Math.random()
      let element2 = Math.random()
      if(value==1){
        element = ((700/2)*element)
        element2 =((1000/3)*element2)
        this.coordinatesRedX.push(element)
        this.coordinatesRedY.push(element2)
      }
      else if(value==2){
        element = ((700/2)*element + (700*0.8/2))
        element2 = ((1000/3)*element2)
        this.coordinatesBlueX.push(element)
        this.coordinatesBlueY.push(element2)
      }
      else if(value==3){
        element = ((700/2)*element + (700*0.5/2))
        element2 = ((1000/3)*element2 + (1000*0.8/3))
        this.coordinatesGreenX.push(element)
        this.coordinatesGreenY.push(element2)
      }
      this.pointsx.push(element)
      this.pointsy.push(element2)
      totalx = totalx + element
      totaly += element2
      switch (value){
        case 1:{
          this.massCenters.red = {x: totalx/100, y: totaly/100}
        }
        case 2:{
          this.massCenters.blue = {x: totalx/100, y: totaly/100}
        }
        case 3:{
          this.massCenters.green = {x: totalx/100, y: totaly/100}
        }
      }
    }
    console.log(this.massCenters)
    console.log(this.coordinatesBlueX)
  }
  calculatePisagor(value: any){
    var localX: number, localY: number
    localX = this.massCenters.red.x-value.x
    localY = this.massCenters.red.y-value.y
    this.pisagor.red = Math.sqrt(localX*localX + localY*localY)
    localX = this.massCenters.blue.x-value.x
    localY = this.massCenters.blue.y-value.y
    this.pisagor.blue = Math.sqrt(localX*localX + localY*localY)
    localX = this.massCenters.green.x-value.x
    localY = this.massCenters.green.y-value.y
    this.pisagor.green = Math.sqrt(localX*localX + localY*localY)
    if (this.pisagor.red<this.pisagor.blue && this.pisagor.red<this.pisagor.green)
      this.ctx.fillStyle = 'red';
    else if(this.pisagor.blue<this.pisagor.red && this.pisagor.blue<this.pisagor.green)
      this.ctx.fillStyle = 'blue';
    else if(this.pisagor.green<this.pisagor.red && this.pisagor.green<this.pisagor.blue)
    this.ctx.fillStyle = 'green';
    this.ctx.fillRect(value.x, value.y, 10, 10);
    console.log(this.pisagor)
  }
  calculateEuclid(value: any){
    let smallest = ''
    for (let i = 0; i < 100; i++) {
      let elementRed = Math.sqrt(Math.pow(this.coordinatesRedX[i]-value.x, 2)+Math.pow(this.coordinatesRedY[i]-value.y, 2))
      let elementBlue = Math.sqrt(Math.pow(this.coordinatesBlueX[i]-value.x, 2)+Math.pow(this.coordinatesBlueY[i]-value.y, 2))
      let elementGreen = Math.sqrt(Math.pow(this.coordinatesGreenX[i]-value.x, 2)+Math.pow(this.coordinatesGreenY[i]-value.y, 2))
      if(this.euklid.red > elementRed) this.euklid.red = elementRed
      if(this.euklid.blue > elementBlue) this.euklid.blue = elementBlue
      if(this.euklid.green > elementGreen) this.euklid.green = elementGreen 
    }
    if (this.euklid.red<this.euklid.blue && this.euklid.red<this.euklid.green)
      this.ctx.fillStyle = 'red';
    else if(this.euklid.blue<this.euklid.red && this.euklid.blue<this.euklid.green)
      this.ctx.fillStyle = 'blue';
    else if(this.euklid.green<this.euklid.red && this.euklid.green<this.euklid.blue)
      this.ctx.fillStyle = 'green';
    this.ctx.fillRect(value.x, value.y, 10, 10);
    console.log(this.euklid)
  }
  appendPoint(formValues){
    console.log(formValues)
    if(!this.checkPointGenerate)
      window.alert("Önce nokta üretiniz!")
    else{
    if(formValues.method=='mass')
      this.calculatePisagor(formValues)
    else if (formValues.method=='knn')
      this.calculateEuclid(formValues)
    else
      window.alert("Önce koordinatları Giriniz!")
    }
  }

}
