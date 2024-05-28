import React, { useState, useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import './ecg.css';

const ECGChart = () => {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
        borderColor: '#ff6384',
        borderWidth: 1,
        fill: false,
        tension: 0.1,
        pointRadius: 0,
        pointHoverRadius: 0,
      },
    ],
  });

  const [ecgData, setEcgData] = useState([]);
  const dataIndex = useRef(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json');
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        const json = await response.json();
        setEcgData(json.data);
      } catch (error) {
        console.error('Error fetching ECG data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (ecgData.length > 0) {
        const newDataIndex = dataIndex.current % ecgData.length;
        const newSample = ecgData[newDataIndex].ecg.Samples[0];

        setData((prevData) => ({
          labels: [...prevData.labels, ''], // Add an empty label for each new data point
          datasets: [
            {
              ...prevData.datasets[0],
              data: [...prevData.datasets[0].data, newSample], // Append new data point
            },
          ],
        }));

        dataIndex.current += 1;
      }
    }, 300);

    return () => clearInterval(interval);
  }, [ecgData]);

  return (
    <div className="line-container">
      <Line
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio:false,
          animation: false,
          scales: {
            x: {
              display: true,
            },
            y: {
              min: -1800,
              max:2000,
              display: true,
              ticks:{
                display:true
              }
            },
          },
          elements: {
            line: {
              borderWidth: 1,
              borderColor: '#ff6384',
            },
            point: {
              radius: 0,
              hoverRadius: 0,
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
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
};

export default ECGChart;
