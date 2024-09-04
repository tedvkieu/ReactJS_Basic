import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getDataQuiz } from '../../services/apiServices';
import _ from 'lodash';
import './DetailQuiz.scss';

const DetailQuiz = (props) => {
    const params = useParams();
    const quizId = params.id;
    const location = useLocation();

    console.log('checck locattion: ', location);

    useEffect(() => {
        fetchQuestions();
    }, [quizId]);

    const fetchQuestions = async () => {
        let res = await getDataQuiz(quizId);
        console.log('check question: ', res);

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
                        console.log('answers: ', item.answers);
                    });
                    console.log('value: ', value);

                    return {
                        questionId: key,
                        answers: answers,
                        questionDesciption,
                        image,
                    };
                })
                .value();

            console.log('data: ', data);
        }
    };
    console.log('check param: ', params);
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
                    <div className="question">
                        Question 1: How are your doing?
                    </div>
                    <div className="answer">
                        <div className="a-child">A. ssadgas</div>
                        <div className="a-child">B. asdfasdf</div>
                        <div className="a-child">C. asdfasdf</div>
                    </div>
                </div>
                <div className="footer">
                    <button className="btn btn-secondary">Previous</button>
                    <button className="btn btn-primary ">Next</button>
                </div>
            </div>
            <div className="right-content">count down</div>
        </div>
    );
};

export default DetailQuiz;
