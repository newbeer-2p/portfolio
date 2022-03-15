export const SubjectItem = ({subject}) => {
    return (
        <div>
            ({subject.grade}) {subject.name}
            <div className="mb-4 mt-2 sub-detail">
                &emsp;&emsp;{subject.detail}
            </div>
        </div>
    )
}