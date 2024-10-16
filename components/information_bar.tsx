import Card from "./animation_info";
function InfoBar(){
    return (
        <div>
            <div className="md:flex">
                <Card number={500} heading="Students"></Card>
                <Card number={100} heading="Teachers"></Card>
                <Card number={50} heading="Courses"></Card>
                <Card number={20} heading="Cities"></Card>
            </div>
        </div>
    );
}

export default InfoBar;
