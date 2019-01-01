import React, { Component } from 'react';
import axios from "axios";
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);
var x = {

}
// var t;
// var y = [{
//   "ab":100
// }]

class PerformanceGraph extends Component {
  constructor(){
    super();
    this.state = {
      userData: { },
      user: ''
    }
  }
    componentDidMount(){

      this.setState({
        user: this.props.user
      }, ()=>{
        axios.get(`http://localhost:8000/user/get-user/${this.state.user}` )
        .then((data)=>{

        axios.post('http://localhost:8000/perform/data', {
            codeforces: data.cfhandle,
            spoj: data.spojhandle,
            hackerearth: data.hehandle,
            github: data.githandle
        })
        .then(function (response) {
            console.log(response);
            axios.get('http://localhost:8000/perform/')
            .then((response)=>{
              var rd = response.data;
              var waCF = (rd.codeforces.total-rd.codeforces.accepted);
              var waSPOJ = (rd.spoj.total-rd.spoj.accepted)
              // var acHE = (rd.hackerearth.accepted)
              this.setState({
                userData:response.data,
                chartConfigs: {
                  type: "msstackedcolumn2dlinedy",
                  width: 1000,
                  height: 600,
                  dataFormat: "JSON",
                  dataSource: {
                    chart: {
                      "caption": "Comparision of your Competitive Programming progress",
                      // "subcaption": "2011 - 2016",
                      "pyaxisname": "Number of Questions",
                      // "syaxisname": "Platforms",
                      // "snumbersuffix": "%",
                      // "syaxismaxvalue": "25",
                      "theme": "fusion",
                      "showvalues": "0",
                      "drawcrossline": "1",
                      // "divlinealpha": "20"
                    },
                    "categories": [
                      {
                        "category": [
                          {
                            "label": "codeforces"
                          },
                          {
                            "label": "spoj"
                          },
                          {
                            "label": "HackerEarth"
                          }
                        ]
                      }
                    ],
                    "dataset": [
                      {
                        "dataset": [
                          {
                            "seriesname": "Your AC submissions",
                            "data": [
                              {
                               "value": rd.codeforces.accepted
                              },
      
                              {
                                "value": rd.spoj.accepted
                              },
                              {
                                "value": rd.hackerearth.accepted
                              }
                            ]
                          },
                          {
                            "seriesname": "Your WA submissions",
                            "data": [
                              {
                                "value": waCF
                              },
                              {
                                "value": waSPOJ
                              }
                              // {
                              //   "value": acHE
                              // }
                            ]
                          }
                        ]
                      },
                      {
                        "dataset": [
                          {
                            "seriesname": "College Average AC",
                            "data": [
                              {
                                "value": "102"
                              },
                              {
                                "value": "107"
                              },
                              {
                                "value": "160"
                              }
                            ]
                          },
                          {
                            "seriesname": "College Average WA",
                            "data": [
                              {
                                "value": "198"
                              },
                              {
                                "value": "170"
                              }
                              // {
                              //   "value": "107"
                              // }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                }
              })
              console.log(response.data)
              x=(response.data)
              console.log(x.codeforces.accepted)
      
            })
            .catch((err)=>{
              console.log(err);
            })
        })
        .catch(function (error) {
            console.log(error);
        });
            
        })
      })
        
        
    }


render() {
  return  (
      <div>
        <ReactFC {...this.state.chartConfigs}/>
      </div>
 
  )
}
// },1000)
}

// const  dataSource = {
//   "chart": {
//     "caption": "Comparision of your Competitive Programming progress",
//     // "subcaption": "2011 - 2016",
//     "pyaxisname": "Number of Questions",
//     // "syaxisname": "% of total market share",
//     // "snumbersuffix": "%",
//     // "syaxismaxvalue": "25",
//     "theme": "fusion",
//     "showvalues": "0",
//     "drawcrossline": "1",
//     // "divlinealpha": "20"
//   },
//   "categories": [
//     {
//       "category": [
//         {
//           "label": "codeforces"
//         },
//         {
//           "label": "spoj"
//         },
//         {
//           "label": "HackerEarth"
//         }
//       ]
//     }
//   ],
//   "dataset": [
//     {
//       "dataset": [
//         {
//           "seriesname": "Your AC submissions",
//           "data": [
//             {
//             //  "value": this.state.userData
//             },
//
//             {
//               "value": "106"
//             },
//             {
//               "value": "106"
//             }
//           ]
//         },
//         {
//           "seriesname": "Your WA submissions",
//           "data": [
//             {
//               "value": "196"
//             },
//             {
//               "value": "259"
//             },
//             {
//               "value": "234"
//             }
//           ]
//         }
//       ]
//     },
//     {
//       "dataset": [
//         {
//           "seriesname": "College Average AC",
//           "data": [
//             {
//               "value": "373"
//             },
//             {
//               "value": "391"
//             },
//             {
//               "value": "380"
//             }
//           ]
//         },
//         {
//           "seriesname": "College Average WA",
//           "data": [
//             {
//               "value": "47"
//             },
//             {
//               "value": "73"
//             },
//             {
//               "value": "107"
//             }
//           ]
//         }
//       ]
//     }
//   ]
// };
// const chartConfigs = {
//   type: "msstackedcolumn2dlinedy",
//   width: 1000,
//   height: 600,
//   dataFormat: "JSON",
//   dataSource:dataSource
// }


export default PerformanceGraph ;


