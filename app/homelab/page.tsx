"use client";
import React, { useState } from "react";

const NetworkDocumentation = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Header */}
      <header className="bg-gray-800 py-6 px-4 shadow-lg">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-white">
            Network Infrastructure Documentation
          </h1>
          <p className="text-gray-400 mt-2">
            Secure pfSense Configuration with DHCP, NAT, and Firewall Rules
          </p>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-gray-800 border-b border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mb-px">
            {["overview", "ips", "firewall", "services", "diagram"].map(
              (tab) => (
                <button
                  key={tab}
                  className={`mr-2 py-4 px-6 font-medium border-b-2 ${
                    activeTab === tab
                      ? "border-blue-500 text-white"
                      : "border-transparent text-gray-400 hover:text-gray-300"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              )
            )}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Overview Section */}
        {activeTab === "overview" && (
          <section className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Network Overview
            </h2>
            <p className="mb-4">
              This documentation outlines the secure network infrastructure
              built with pfSense, including DHCP configuration, NAT rules, and
              firewall policies. The network supports a Windows Domain
              Controller and file server running on VMware.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Components
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>pfSense Firewall/Router</li>
                  <li>Windows Server 2019 Domain Controller</li>
                  <li>Windows File Server VM</li>
                  <li>VMware ESXi Hypervisor</li>
                  <li>DHCP Server for dynamic IP allocation</li>
                  <li>NAT for internet connectivity</li>
                </ul>
              </div>

              <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Security Features
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Restrictive firewall policies</li>
                  <li>VLAN segmentation</li>
                  <li>Port-based access controls</li>
                  <li>Secure remote access (VPN)</li>
                  <li>Intrusion detection system</li>
                  <li>Regular security updates</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* IP Configuration Section */}
        {activeTab === "ips" && (
          <section className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              IP Address Configuration
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">
                  pfSense Interfaces
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="bg-gray-600">
                        <th className="px-4 py-2 text-left">Interface</th>
                        <th className="px-4 py-2 text-left">IP Address</th>
                        <th className="px-4 py-2 text-left">Subnet Mask</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-600">
                        <td className="px-4 py-2">WAN</td>
                        <td className="px-4 py-2">192.168.1.2</td>
                        <td className="px-4 py-2">255.255.255.0</td>
                      </tr>
                      <tr className="border-b border-gray-600">
                        <td className="px-4 py-2">LAN</td>
                        <td className="px-4 py-2">10.0.0.1</td>
                        <td className="px-4 py-2">255.255.255.0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">
                  DHCP Configuration
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="bg-gray-600">
                        <th className="px-4 py-2 text-left">Parameter</th>
                        <th className="px-4 py-2 text-left">Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-600">
                        <td className="px-4 py-2">Range Start</td>
                        <td className="px-4 py-2">10.0.0.100</td>
                      </tr>
                      <tr className="border-b border-gray-600">
                        <td className="px-4 py-2">Range End</td>
                        <td className="px-4 py-2">10.0.0.200</td>
                      </tr>
                      <tr className="border-b border-gray-600">
                        <td className="px-4 py-2">Lease Time</td>
                        <td className="px-4 py-2">1440 minutes</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">DNS Servers</td>
                        <td className="px-4 py-2">10.0.0.10, 8.8.8.8</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-gray-700 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">
                Static IP Assignments
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-gray-600">
                      <th className="px-4 py-2 text-left">Device</th>
                      <th className="px-4 py-2 text-left">IP Address</th>
                      <th className="px-4 py-2 text-left">MAC Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-600">
                      <td className="px-4 py-2">Domain Controller</td>
                      <td className="px-4 py-2">10.0.0.10</td>
                      <td className="px-4 py-2">00:50:56:8a:3b:c1</td>
                    </tr>
                    <tr className="border-b border-gray-600">
                      <td className="px-4 py-2">File Server</td>
                      <td className="px-4 py-2">10.0.0.20</td>
                      <td className="px-4 py-2">00:50:56:8a:4d:e2</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Network Printer</td>
                      <td className="px-4 py-2">10.0.0.30</td>
                      <td className="px-4 py-2">00:50:56:8a:6f:a3</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {/* Firewall Rules Section */}
        {activeTab === "firewall" && (
          <section className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              Firewall Rules Configuration
            </h2>

            <div className="bg-gray-700 p-4 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                WAN Rules
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-gray-600">
                      <th className="px-4 py-2 text-left">Protocol</th>
                      <th className="px-4 py-2 text-left">Source</th>
                      <th className="px-4 py-2 text-left">Port</th>
                      <th className="px-4 py-2 text-left">Destination</th>
                      <th className="px-4 py-2 text-left">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-600">
                      <td className="px-4 py-2">TCP/UDP</td>
                      <td className="px-4 py-2">Any</td>
                      <td className="px-4 py-2">53 (DNS)</td>
                      <td className="px-4 py-2">LAN Network</td>
                      <td className="px-4 py-2 text-white">Allow</td>
                    </tr>
                    <tr className="border-b border-gray-600">
                      <td className="px-4 py-2">TCP</td>
                      <td className="px-4 py-2">Any</td>
                      <td className="px-4 py-2">80, 443 (HTTP/HTTPS)</td>
                      <td className="px-4 py-2">LAN Network</td>
                      <td className="px-4 py-2 text-white">Allow</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Any</td>
                      <td className="px-4 py-2">Any</td>
                      <td className="px-4 py-2">Any</td>
                      <td className="px-4 py-2">LAN Address</td>
                      <td className="px-4 py-2 text-red-400">Block</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-gray-700 p-4 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                LAN Rules
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-gray-600">
                      <th className="px-4 py-2 text-left">Protocol</th>
                      <th className="px-4 py-2 text-left">Source</th>
                      <th className="px-4 py-2 text-left">Port</th>
                      <th className="px-4 py-2 text-left">Destination</th>
                      <th className="px-4 py-2 text-left">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-600">
                      <td className="px-4 py-2">TCP</td>
                      <td className="px-4 py-2">LAN Net</td>
                      <td className="px-4 py-2">53 (DNS)</td>
                      <td className="px-4 py-2">Domain Controller</td>
                      <td className="px-4 py-2 text-white">Allow</td>
                    </tr>
                    <tr className="border-b border-gray-600">
                      <td className="px-4 py-2">TCP</td>
                      <td className="px-4 py-2">LAN Net</td>
                      <td className="px-4 py-2">88, 389, 636 (LDAP)</td>
                      <td className="px-4 py-2">Domain Controller</td>
                      <td className="px-4 py-2 text-white">Allow</td>
                    </tr>
                    <tr className="border-b border-gray-600">
                      <td className="px-4 py-2">TCP/UDP</td>
                      <td className="px-4 py-2">LAN Net</td>
                      <td className="px-4 py-2">445 (SMB)</td>
                      <td className="px-4 py-2">File Server</td>
                      <td className="px-4 py-2 text-white">Allow</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Any</td>
                      <td className="px-4 py-2">Any</td>
                      <td className="px-4 py-2">Any</td>
                      <td className="px-4 py-2">Any</td>
                      <td className="px-4 py-2 text-red-400">Block</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {/* Services Section */}
        {activeTab === "services" && (
          <section className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              Services Configuration
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Domain Controller
                </h3>
                <ul className="space-y-2">
                  <li>
                    <span className="font-semibold">IP Address:</span> 10.0.0.10
                  </li>
                  <li>
                    <span className="font-semibold">Hostname:</span>{" "}
                    DC01.arpang.local
                  </li>
                  <li>
                    <span className="font-semibold">OS:</span> Windows Server
                    2019
                  </li>
                  <li>
                    <span className="font-semibold">Services:</span> Active
                    Directory, DNS, DHCP Relay
                  </li>
                  <li>
                    <span className="font-semibold">VMware:</span> ESXi 7.0, 4
                    vCPU, 8GB RAM
                  </li>
                </ul>
              </div>

              <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">
                  File Server
                </h3>
                <ul className="space-y-2">
                  <li>
                    <span className="font-semibold">IP Address:</span> 10.0.0.20
                  </li>
                  <li>
                    <span className="font-semibold">Hostname:</span>{" "}
                    FS01.arpang.local
                  </li>
                  <li>
                    <span className="font-semibold">OS:</span> Windows Server
                    2019
                  </li>
                  <li>
                    <span className="font-semibold">Services:</span> File
                    Services, Print Services
                  </li>
                  <li>
                    <span className="font-semibold">VMware:</span> ESXi 7.0, 2
                    vCPU, 4GB RAM
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-gray-700 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">
                NAT Configuration
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-gray-600">
                      <th className="px-4 py-2 text-left">Interface</th>
                      <th className="px-4 py-2 text-left">Source</th>
                      <th className="px-4 py-2 text-left">NAT Address</th>
                      <th className="px-4 py-2 text-left">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-600">
                      <td className="px-4 py-2">WAN</td>
                      <td className="px-4 py-2">LAN Net</td>
                      <td className="px-4 py-2">WAN address</td>
                      <td className="px-4 py-2">
                        Outbound NAT for internet access
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">WAN</td>
                      <td className="px-4 py-2">WAN address</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {/* Network Diagram Section */}
        {activeTab === "diagram" && (
          <section className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              Network Diagram
            </h2>

            <div className="bg-gray-700 p-4 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Network Architecture
              </h3>
              <div className="flex justify-center">
                <div className="bg-gray-600 p-4 rounded-lg inline-block">
                  <div className="text-center font-mono">
                    <div className="bg-blue-500 text-white p-2 rounded mb-2">
                      Internet
                    </div>
                    <div className="text-xl">↓</div>
                    <div className="bg-purple-500 text-white p-2 rounded mb-2">
                      WAN: 192.168.1.2
                    </div>
                    <div className="text-xl">↓</div>
                    <div className="bg-red-500 text-white p-2 rounded mb-2">
                      pfSense Firewall
                    </div>
                    <div className="text-xl">↓</div>
                    <div className="bg-green-500 text-white p-2 rounded mb-2">
                      LAN: 10.0.0.1/24
                    </div>

                    <div className="flex justify-around mt-4">
                      <div>
                        <div className="bg-yellow-500 text-white p-2 rounded mb-2">
                          Domain Controller
                        </div>
                        <div className="text-xs">10.0.0.10</div>
                      </div>
                      <div>
                        <div className="bg-yellow-500 text-white p-2 rounded mb-2">
                          File Server
                        </div>
                        <div className="text-xs">10.0.0.20</div>
                      </div>
                      <div>
                        <div className="bg-yellow-500 text-white p-2 rounded mb-2">
                          Client Devices
                        </div>
                        <div className="text-xs">DHCP: 10.0.0.100-200</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">
                Traffic Flow
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Internet traffic flows through WAN interface with NAT</li>
                <li>
                  Internal clients receive IP addresses via DHCP from pfSense
                </li>
                <li>
                  Domain Controller handles authentication and DNS internally
                </li>
                <li>File Server provides SMB shares to authenticated users</li>
                <li>
                  Firewall rules restrict unnecessary traffic between networks
                </li>
              </ul>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default NetworkDocumentation;
