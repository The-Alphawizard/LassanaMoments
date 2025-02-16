import React from "react";
import { FaUsers } from "react-icons/fa";
import { ChartNoAxesCombined, ChartNetwork } from "lucide-react";

import { Line } from "react-chartjs-2";
import "chart.js/auto";
import Icon1 from "../../../images/Photographer Dashboard-Photographer Side-Images/1.png"; //1
import Icon2 from "../../../images/Photographer Dashboard-Photographer Side-Images/2.png";    
import Icon3 from "../../../images/Photographer Dashboard-Photographer Side-Images/3.png";
import Icon4 from "../../../images/Photographer Dashboard-Photographer Side-Images/4.png";

const MetricCard = ({ icon, title, value }) => (
  <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center transition-all hover:scale-105">
    <div className="text-4xl text-blue-500 mb-2">{icon}</div>
    <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-3xl font-bold text-gray-900">{value}</p>
  </div>
);

export function YourState() {
  const albums = [
    {
      id: 1,
      image:
        "/src/assets/Photographer Dashboard(Photographer Side) Images/1.jpg",
      title: "Album 01",
      views: 10,
      appreciations: 10,
      comments: 10
    },
    {
      id: 2,
      image:
        "/src/assets/Photographer Dashboard(Photographer Side) Images/1.jpg",
      title: "Album 02",
      views: 59,
      appreciations: 59,
      comments: 59
    },
    {
      id: 3,
      image:
        "/src/assets/Photographer Dashboard(Photographer Side) Images/1.jpg",
      title: "Album 03",
      views: 10,
      appreciations: 10,
      comments: 10
    },
    {
      id: 4,
      image:
        "/src/assets/Photographer Dashboard(Photographer Side) Images/1.jpg",
      title: "Album 04",
      views: 100,
      appreciations: 100,
      comments: 100
    }
  ];

  const albumViewData = {
    labels: ["Jan", "Feb", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Album 01",
        data: [18, 27, 22, 26, 19, 27],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1
      },
      {
        label: "Album 02",
        data: [9, 18, 12, 15, 10, 12],
        fill: true,
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        tension: 0.1
      },
      {
        label: "Album 03",
        data: [0, 9, 6, 8, 7, 9],
        fill: true,
        backgroundColor: "rgba(255,206,86,0.2)",
        borderColor: "rgba(255,206,86,1)",
        tension: 0.1
      },
      {
        label: "Album 04",
        data: [12, 15, 10, 12, 14, 16],
        fill: true,
        backgroundColor: "rgba(153,102,255,0.2)",
        borderColor: "rgba(153,102,255,1)",
        tension: 0.1
      }
    ]
  };

  return (
    <div className="mt-6">
      {/* Your State Section */}
      <div
        style={{
          background:
            "linear-gradient(to bottom, var(--color-aliceBlue), var(--color-periwinkleBlue))"
        }}
        className=" rounded-2xl shadow-lg p-6 mt-4"
      >
        <div className="bg-white flex items-center gap-3  rounded-lg shadow-md p-4 mb-4">
          <FaUsers className="text-3xl text-[#115c86] mr-2" />
          <h2 className="text-2xl font-bold text-[#115c86]">Your State</h2>
        </div>

        {/* Grid container for MetricCards */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          <MetricCard
            icon={
              <img src={Icon1} alt="Album Views Icon" className="w-12 h-12" />
            }
            title="Album Views"
            value="242"
          />
          <MetricCard
            icon={
              <img src={Icon2} alt="Album Views Icon" className="w-12 h-12" />
            }
            title="Appreciations"
            value="242"
          />
          <MetricCard
            icon={
              <img src={Icon3} alt="Album Views Icon" className="w-12 h-12" />
            }
            title="Profile Views"
            value="242"
          />
          <MetricCard
            icon={
              <img src={Icon4} alt="Album Views Icon" className="w-12 h-12" />
            }
            title="Album Comments"
            value="242"
          />
        </div>
      </div>

      {/* Album Performance Section */}
      <div
        style={{
          background:
            "linear-gradient(to bottom, var(--color-aliceBlue), var(--color-periwinkleBlue))"
        }}
        className=" rounded-2xl shadow-lg p-6 mt-4"
      >
        <div className="bg-white flex items-center gap-2  rounded-lg shadow-md p-4 mb-4">
          <ChartNoAxesCombined className="text-3xl text-[#115c86] mr-2" />
          <h2 className="text-2xl font-bold text-[#115c86]">
            Album Performance
          </h2>
        </div>
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs  text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Project
              </th>
              <th scope="col" className="px-6 py-3">
                Views
              </th>
              <th scope="col" className="px-6 py-3">
                Appreciations
              </th>
              <th scope="col" className="px-6 py-3">
                Comments
              </th>
            </tr>
          </thead>
          <tbody>
            {albums.map((album) => (
              <tr
                key={album.id}
                className=" bg-white border-b transition-transform duration-300 hover:bg-gray-50"
              >
                <td className="flex items-center px-6 py-4 space-x-3">
                  <img
                    src={album.image}
                    alt={album.title}
                    className="w-10 h-10 rounded"
                  />
                  <div>
                    <div className="font-medium text-gray-900">
                      {album.title}
                    </div>
                    <div className="text-sm font-normal text-gray-500">
                      Published Feb 16, 2024
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">{album.views}</td>
                <td className="px-6 py-4">{album.appreciations}</td>
                <td className="px-6 py-4">{album.comments}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Album View Section */}
      <div
        style={{
          background:
            "linear-gradient(to bottom, var(--color-aliceBlue), var(--color-periwinkleBlue))"
        }}
        className="rounded-2xl shadow-lg p-6 mt-4"
      >
        <div className="flex items-center gap-2 bg-white rounded-lg shadow-md p-4 mb-4">
          <ChartNetwork className="text-3xl text-[#115c86] mr-2" />
          <h2 className="text-2xl font-bold text-[#115c86]">Album View</h2>
        </div>
        <Line
          data={albumViewData}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: "top",
                labels: {
                  color: "#333",
                  font: {
                    size: 14
                  }
                }
              },
              tooltip: {
                enabled: true,
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                bodyColor: "#fff",
                titleColor: "#fff"
              }
            },
            scales: {
              x: {
                grid: {
                  color: "rgba(0, 0, 0, 0.1)"
                }
              },
              y: {
                grid: {
                  color: "rgba(0, 0, 0, 0.1)"
                }
              }
            }
          }}
        />
      </div>

      {/* Profile View Section */}
      <div
        style={{
          background:
            "linear-gradient(to bottom, var(--color-aliceBlue), var(--color-periwinkleBlue))"
        }}
        className=" rounded-lg shadow-lg p-6 mt-4"
      >
        <div className="flex items-center gap-2 bg-white rounded-lg shadow-md p-4 mb-4">
          <ChartNetwork className="text-3xl text-[#115c86] mr-2" />
          <h2 className="text-2xl font-bold text-[#115c86]">Profile View</h2>
        </div>
        <Line
          data={albumViewData}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: "top",
                labels: {
                  color: "#333",
                  font: {
                    size: 14
                  }
                }
              },
              tooltip: {
                enabled: true,
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                bodyColor: "#fff",
                titleColor: "#fff"
              }
            },
            scales: {
              x: {
                grid: {
                  color: "rgba(0, 0, 0, 0.1)"
                }
              },
              y: {
                grid: {
                  color: "rgba(0, 0, 0, 0.1)"
                }
              }
            }
          }}
        />
      </div>
    </div>
  );
}

export default YourState;
