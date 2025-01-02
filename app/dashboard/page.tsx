'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { useState, useEffect } from 'react'

// Move data generation to a separate function that uses a seed
const generateDataWithSeed = (seed: number) => {
  const data = []
  for (let i = 0; i < 10; i++) {
    // Use deterministic values for initial render
    data.push({
      time: i,
      quantum: 50 + Math.sin(i + seed) * 30,
      neural: 50 + Math.cos(i + seed) * 30,
      efficiency: 50 + Math.sin((i + seed) * 0.5) * 30,
    })
  }
  return data
}

export default function Dashboard() {
  // Use a fixed seed for initial render
  const [data, setData] = useState(() => generateDataWithSeed(1))

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => {
        const lastTime = prev[prev.length - 1].time
        return [...prev.slice(1), {
          time: lastTime + 1,
          quantum: Math.random() * 100,
          neural: Math.random() * 100,
          efficiency: Math.random() * 100,
        }]
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">System Dashboard</h1>
      
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Quantum Processing</CardTitle>
            <CardDescription>Current quantum system status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{data[data.length - 1].quantum.toFixed(2)}%</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Neural Activity</CardTitle>
            <CardDescription>Bioinspired system metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{data[data.length - 1].neural.toFixed(2)}%</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>System Efficiency</CardTitle>
            <CardDescription>Overall performance metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{data[data.length - 1].efficiency.toFixed(2)}%</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Performance Metrics</CardTitle>
          <CardDescription>Real-time system monitoring</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="quantum">
            <TabsList>
              <TabsTrigger value="quantum">Quantum</TabsTrigger>
              <TabsTrigger value="neural">Neural</TabsTrigger>
              <TabsTrigger value="efficiency">Efficiency</TabsTrigger>
            </TabsList>
            <TabsContent value="quantum">
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="quantum" stroke="#8884d8" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
            <TabsContent value="neural">
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="neural" stroke="#82ca9d" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
            <TabsContent value="efficiency">
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="efficiency" stroke="#ffc658" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}