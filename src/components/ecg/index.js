import React, { useState, useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import './ecg.css'

const ECGChart = () => {
  const [data, setData] = useState({
    labels: Array(16).fill(''),
    datasets: [
      {
        label: 'ECG Waveform',
        data: Array(16).fill(0),
        borderColor: 'black', // Waveform color
        borderWidth: 0.8, // Waveform line width
        fill: false,
        tension: 0.1,
        pointRadius: 0, // Remove point markers
        pointHoverRadius: 0, // Remove hover effect on point markers
      },
    ],
  });

  const [ecgData, setEcgData] = useState([]);
  const dataIndex = useRef(0);

  useEffect(() => {
    // Fetch the data from public/data.json
    fetch('/data.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then((json) => {
        setEcgData(json.data);
      })
      .catch((error) => console.error('Error fetching ECG data:', error));
  }, []);

  const updateData = () => {
    if (ecgData.length > 0) {
      const newDataIndex = dataIndex.current % ecgData.length;
      const newSamples = ecgData[newDataIndex].ecg.Samples;

      setData((prevData) => ({
        ...prevData,
        datasets: [
          {
            ...prevData.datasets[0],
            data: newSamples,
          },
        ],
      }));

      dataIndex.current += 1;
    }
  };

  useEffect(() => {
    const interval = setInterval(updateData, 200); // Update every second
    return () => clearInterval(interval);
  }, [ecgData]);

  return (
    <div>
      <Line
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          animation: false,
          scales: {
            x: {
                
              display: true,
              grid: {
                display: true,
                color: 'black', // Grid line color
                lineWidth: 0.3, // Grid line width
              },
              ticks: {
                display: false, // Hide x-axis labels
                maxTicksLimit: 30,
               

              },
              
            //   border: {
            //     color: '#333', // x-axis line color
            //     width: 2, // x-axis line width
            //   },
            },
            y: {
              min: -2500,
              max: 2500,
              grid: {
                display: true,
                color: 'black ', // Grid line color
                lineWidth: 0.3, // Grid line width
              },
            //   border: {
            //     color: '#333', // y-axis line color
            //     width: 2, // y-axis line width
            //   },
              ticks: {
                display:false,
                color: '#333', // y-axis labels color
              },
            },
          },
          elements: {
            line: {
              borderWidth: 1, // Waveform line width
              borderColor: '#ff6384', // Waveform color
            },
            point: {
              radius: 0, // Remove point markers
              hoverRadius: 0, // Remove hover effect on point markers
            },
          },
          layout: {
            padding: {
              left: 10,
              right: 10,
              top: 10,
              bottom: 10,
            },
          },
        }}
        // height={400} // Fixed height for the chart
        // width={400}
        className='line-container'
      />
    </div>
  );
};

export default ECGChart;


