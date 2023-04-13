import usersStore from "./users/store/users-store";
import { renderAddButton } from "./users/presentation/render-add-button/render-add-button";
import { renderButtons } from "./users/presentation/render-buttons/render-buttons ";
import { renderModal } from "./users/presentation/render-modal/render-modal";
import { renderTable } from "./users/presentation/render-table/render-table";
import { saveUser } from "./users/use-cases/save-user";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const UsersApp = async( element ) => {

    element.innerHTML = 'Loading...';
    await usersStore.loadNextPage();
    element.innerHTML = '';

    renderTable( element );
    renderButtons( element );
    renderAddButton( element );
    renderModal( element, async( userLike ) => {
        const user = await saveUser( userLike );
        usersStore.onUserChanged( user );
        renderTable();
    });
}