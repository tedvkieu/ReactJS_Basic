import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDataQuiz } from '../../services/apiServices';
import _ from 'lodash';

const DetailQuiz = (props) => {
    const params = useParams();
    const quizId = params.id;

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
                            image = item.image
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
    return <div className="detail-quiz-container">detail quiz</div>;
};

export default DetailQuiz;
