import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends Component {
    constructor(props) {
        super(props);
    }

    handleClick(buttonText) {
        if (buttonText === this.props.quiz_question.answer) {
            this.props.showNextQuestionHandler();
        }
    }

    render() {
        return (
            <main>
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul>
                        {/* <QuizQuestionButton button_text={this.props.quiz_question.answer_options[0]} /> */}
                        {this.props.quiz_question.answer_options.map((answer_option, index) => {
                            return (
                                <QuizQuestionButton
                                    clickHandler={this.handleClick.bind(this)}
                                    key={index}
                                    button_text={answer_option}
                                />
                            );
                        })}
                    </ul>
                </section>
            </main>
        );
    }
}

export default QuizQuestion;
