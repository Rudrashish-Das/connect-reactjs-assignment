import { ResponsiveRadialBar } from '@nivo/radial-bar'

const RadialBar = ({ data, colors=['#039F00', '#EB8C00', '#ADD633'], endAngle=292 }) => {

    const dataFinal = data.map((item, index) => ({
        id: item.id + ' ' + item.percentage.toString() + '%',
        data: [
            {
                x: index + 1,
                y: (item.percentage / 100) * endAngle
            }
        ]
    })).reverse();

    const reversedColors = [...colors].reverse();

    return (
        <ResponsiveRadialBar
            data={dataFinal}
            valueFormat=" >-.2f"
            endAngle={endAngle}
            innerRadius={0.35}
            padding={0.4}
            cornerRadius={45}
            colors={reversedColors}
            // margin={{ top: 40, right: 120, bottom: 40, left: 40 }}
            borderColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        1
                    ]
                ]
            }}
            enableTracks={false}
            enableRadialGrid={false}
            enableCircularGrid={false}
            radialAxisStart={{ tickSize: 0, tickPadding: 8, tickRotation: 0 }}
            circularAxisOuter={null}
            label="groupId"
            labelsSkipAngle={0}
            labelsRadiusOffset={0}
            labelsTextColor={{ from: 'color', modifiers: [] }}
            animate={false}
            motionConfig="default"
            isInteractive={true}
            legends={[]}
        />
    )
};

export default RadialBar;