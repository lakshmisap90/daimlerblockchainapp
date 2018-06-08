import { Component, OnInit ,  ViewChild , ElementRef , OnDestroy } from '@angular/core';
import { } from '@types/googlemaps';
import { Quotation } from '../quotation';
import { QuotationService } from '../quotation.services';
import { chart } from 'highcharts';
import * as Highcharts from 'highcharts';
import { Router } from '@angular/router';
import { Data } from "../provider/order-data.provider";

@Component({
  selector: 'app-dealer-dashboard',
  templateUrl: './dealer-dashboard.component.html',
  styleUrls: ['./dealer-dashboard.component.css']
})

export class DealerDashboardComponent implements OnInit {
  quotation: Quotation[];
  earlyCounter = 0 ; ontimeCounter = 0 ; delayedCounter = 0 ; rejectedCounter = 0 ;
  @ViewChild('gmap') gmapElement: any;
  @ViewChild('chartTarget') chartTarget: ElementRef;
  map: google.maps.Map;
  chart: Highcharts.ChartObject;

  constructor(private quotationService: QuotationService , private router: Router ,  private data: Data) { }
  ngOnInit() {
      this.getQuotation();
  }

  ngOnDestroy() {
     this.chart = null;
  }

  //Method to render chart and configure options
  renderChart() : void {
    this.formanalysisData();
    let options: any = {
      title:{
         text:''
       },
        plotOptions: {
            pie: {
                shadow: true,
                 borderWidth: 0,
                 dataLabels: {
                    enabled: false
              }
            },
            column: {
                colorByPoint: true
            },
            line: {
            marker: {
                  enabled: false
                }
            }

        },
        colors: ['#F05F50','#27A2DF','#43B29A','#F7D161'],
        legend: {
            layout: 'vertical',
            enabled: true,
            borderWidth: 0,
            align: 'right',
            verticalAlign: 'middle',
            floating: false,
            symbolHeight: .001,
            symbolWidth: .001,
            symbolRadius: .001,
            backgroundColor: 'transparent',
            labelFormatter: function() {
                  return '<span style="font-size:15px;font-weight:bold;text-align: left; width:130px;float:left;color:'+this.color+'">' + this.y + '</span><div style="width:40px; float:left;text-align:right;color:#ffffff !important;font-size:15px;font-weight:normal;">        ' + this.name + '</div>';
          }
        },
        tooltip: {
             formatter: function() {
                 return '<b>'+ this.point.name +'</b>: '+ this.y +' %';
             }
         },
         series: [{
            name: 'Browsers',
            data: [["Early Delivery",this.earlyCounter  ],["On Time Delivery",this.ontimeCounter],["Delayed",this.delayedCounter],["Rejected",this.rejectedCounter]],
            size: '60%',
            innerSize: '70%',
            showInLegend:true
        }]
      };

      options.chart = {
            renderTo: 'container',
            type: 'pie',
            backgroundColor:null,
            height:250,

           events: {
             load: function(event) {
               var chart = this,
                 points = chart.series[0].points,
                 len = points.length,
                 total = 0,
                 i = 0;

               for (; i < len; i++) {
                 total += points[i].y;
               }

               chart.setTitle({
                 text: total,
                 align: 'center',
                 verticalAlign: 'middle',
                 x:-80,
                 y: 5,
                 style: {
                   color: '#FFFFFF',
                   font: 'bold 40px'
                }
             });
           }
         }
      };
     this.chart = chart(this.chartTarget.nativeElement, options);
   }


   //Method to summarise final count on status
  formanalysisData() : void {
      var analysisData = [];
      for(var i in this.quotation){
        this.quotation[i].status === "early" ? this.earlyCounter++:'';
        this.quotation[i].status === "ontime" ? this.ontimeCounter++:'';
        this.quotation[i].status === "delayed" ? this.delayedCounter++:'';
        this.quotation[i].status === "rejected" ? this.rejectedCounter++:'';
      }
  }

  //Method to render Google static Map with provided location points
  renderMap() : void {
    var mapProp = {
      center: new google.maps.LatLng(18.5793, 73.8143),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }

  //Service method to get list of quotation orders
  getQuotation(): void {
    this.quotationService.getQuotation()
      .subscribe(quotation => {
        this.quotation = quotation;
        //this.renderMap();
        this.renderChart();
        console.log(quotation);
      });
  }

  //Method triggered on clicking item in order list to navigate to list details screen
  navigateToDetails(event, qId) : void{
    this.data.storage =  {
      "quotationDetails" : this.quotation.filter(item => item.qID == qId);
    }
    if( event.target.tagName.toLowerCase() == 'div'){
      this.router.navigate(['order/'+qId+'/details']);
    }
  }

}
