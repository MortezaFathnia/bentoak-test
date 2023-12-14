import { FC, useEffect, useState } from "react"
import { Post } from "../../../services/type"
import { countByKey } from "../../../lib/utils";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

type IProps = {
    data: []
}

type GroupedItem = {
    id: string;
    count: number;
}

const BarChartPosts: FC<IProps> = ({ data }) => {
    const [userPost, setUserPost] = useState<GroupedItem[]>([])
    useEffect(() => {
        if (data) {
            setUserPost(countByKey<Post>(data, 'userId'))
        }
    }, [data])
    return (
        <div style={{ width: '100%', height: 'calc(100vh - 20px)' }}>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={500}
                    height={300}
                    data={userPost}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="id" />
                    <YAxis />
                    <Tooltip />
                    <Legend name="count" />
                    <Bar dataKey="count" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default BarChartPosts;