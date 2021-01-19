// Edit.tsx
import React, { ChangeEventHandler, Component } from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { editDraftAction, fetchItemById, saveDraftAction } from './action/index'
import { NEW_DRAFT_SYMBOL } from './reducer/draft'

// export default () => {
//     <div>Edit</div>
// }

// interface IState {
//     isChecked: boolean
//     content: string
// }

const mapStateToProps = (storeState: IStoreState) => ({
    draft: storeState.draft,
})

type IStateProps = ReturnType<typeof mapStateToProps>

const mapDispatchToProps = {
    editDraftAction,
    saveDraftAction,
    fetchItemById,
}

type IDispatchProps = typeof mapDispatchToProps

type IProps = IStateProps & IDispatchProps & RouteComponentProps<{id?: number}>

class Edit extends Component<IProps> {

    // state: IState = {
    //     isChecked: false,
    //     content: '',
    // }

    get draft() {
        return this.props.draft[this.props.match.params.id || NEW_DRAFT_SYMBOL]
    }

    componentDidMount() {
        if (this.props.match.params.id) {
            this.props.fetchItemById(this.props.match.params.id)
        }
    }

    onCheckboxValueChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        // this.setState({
        this.props.editDraftAction({
            ...this.draft,
            isChecked: e.target.checked,
        })
    }

    onContentValueChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        // this.setState({
        this.props.editDraftAction({
            ...this.draft,
            content: e.target.value,
        })
    }

    onSave() = () => {
        // console.log(this.state)
        this.props.saveDraftAction(this.draft.id)
    }

    render() {
        const draft = this.draft
        if (!draft) {
            return null
        }
        return (
            <div>
                <div>
                    <input
                        type="checkbox"
                        // checked={this.state.isChecked}
                        checked={draft.isChecked}
                        onChange={this.onCheckboxValueChange}
                    />
                    <input
                        type="text"
                        // value={this.state.content}
                        value={draft.content}
                        onChange={this.onContentValueChange}
                    />
                </div>
                <div>
                    <button>取消</button>
                    <button onClick={this.onSave}>确定</button>
                </div>
            </div>
        )
    }
}

export default connect<IStateProps, IDispatchProps>(mapStateToProps, mapDispatchToProps)(Edit)