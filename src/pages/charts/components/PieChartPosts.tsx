import { FC, useEffect, useState } from "react"
import { completedTodos } from "../../../lib/utils";
import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts';

type IProps = {
    data: []
}

type GroupedItem = {
    id: string;
    completed: number;
}

type Label = {
    cx: number,
    cy: number,
    midAngle: number,
    innerRadius: number,
    outerRadius: number,
    percent: number,
    index: number
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: Label) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

const PieChartTodos: FC<IProps> = ({ data }) => {
    const [userCompletedTodos, setuserCompletedTodos] = useState<GroupedItem[]>([])
    useEffect(() => {
        if (data) {
            setuserCompletedTodos(completedTodos(data, 'userId'))
        }
        console.log(userCompletedTodos)
    }, [data, userCompletedTodos])

    return (
        <div style={{ width: '100%', display: 'flex', height: 'calc(100vh - 20px)' }}>
            <ResponsiveContainer width="100%" height="100%" style={{ alignItems: 'center', justifyContent: 'center' }}>
                <PieChart>
                    <Pie
                        data={userCompletedTodos}
                        innerRadius={100}
                        outerRadius={240}
                        fill="#8884d8"
                        paddingAngle={5}
                        label={renderCustomizedLabel}
                        dataKey="completed"
                    >
                        {userCompletedTodos.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                       
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}

export default PieChartTodos;