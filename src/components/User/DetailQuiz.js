import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getDataQuiz } from '../../services/apiServices';
import _ from 'lodash';
import './DetailQuiz.scss';
import Question from './Question';

const DetailQuiz = (props) => {
    const params = useParams();
    const quizId = params.id;
    const location = useLocation();

    const [dataQuiz, setDataQuiz] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        fetchQuestions();
    }, [quizId]);

    const fetchQuestions = async () => {
        let res = await getDataQuiz(quizId);

        if (res && res.EC === 0) {
            let raw = res.DT;
            let data = _.chain(raw)
                // Group the elements of Array based on `color` property
                .groupBy('id')
                .map((value, key) => {
                    let answers = [];
                    let questionDesciption,
                        image = null;
                    value.forEach((item, index) => {
                        if (index === 0) {
                            questionDesciption = item.description;
                            image = item.image;
                        }
                        answers.push(item.answers);
                    });

                    return {
                        questionId: key,
                        answers: answers,
                        questionDesciption,
                        image,
                    };
                })
                .value();
            setDataQuiz(data);
        }
    };

    const handlePrevious = () => {
        if (index - 1 < 0) return;

        setIndex(index - 1);
        
    };

    const handleNext = () => {
        if (dataQuiz && dataQuiz.length > index + 1) {
            setIndex(index + 1);
        }
    };

    return (
        <div className="detail-quiz-container">
            <div className="left-content">
                <div className="title">
                    QUIZ {quizId}:{location?.state?.quizTitle}
                </div>
                <hr />
                <div className="q-body">
                    <img />
                </div>
                <div className="q-content">
                    <Question
                        index={index}
                        data={
                            dataQuiz && dataQuiz.length > 0
                                ? dataQuiz[index]
                                : []
                        }
                    />
                </div>
                <div className="footer">
                    <button
                        className="btn btn-secondary"
                        onClick={() => handlePrevious()}>
                        Previous
                    </button>
                    <button
                        className="btn btn-primary"
                        onClick={() => handleNext()}>
                        Next
                    </button>
                </div>
            </div>
            <div className="right-content">count down</div>
        </div>
    );
};

export default DetailQuiz;
