import {$} from "protractor";
import {DeleteDialogBox} from "./DeleteDialogBox";
import {Helpers} from "../../utils/Helpers";

export class ActionsMenu {
    helpers = new Helpers();

    deleteButton = $("button[data-selenium-test='profile-settings-profileSettings.delete']");

    pressDelete() {
        this.helpers.waitElementToBeClickable(this.deleteButton);
        this.deleteButton.click();
        return new DeleteDialogBox();
    }

}