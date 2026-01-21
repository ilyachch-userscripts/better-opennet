import { GM_getValue, GM_setValue, GM_deleteValue, GM_registerMenuCommand } from '$';

const commentsHiddenKey = 'better-opennet:comments-hidden';
const addCommentHiddenKey = 'better-opennet:add-comment-hidden';
const visualNoiseHiddenKey = 'better-opennet:visual-noise-hidden';
const clearViewKey = 'better-opennet:clear-view-enabled';
const visualNoiseSelectors: string[] = ['div#lenta_nav', 'div#lenta_nav2'];

function findSectionAfterHeader(
  headerText: string
): { header: HTMLTableElement; section: HTMLTableElement } | null {
  const headerTables = Array.from(document.querySelectorAll<HTMLTableElement>('table.thdr'));

  for (const headerTable of headerTables) {
    const text = headerTable.textContent || '';
    if (!text.includes(headerText)) {
      continue;
    }
    const nextElement = headerTable.nextElementSibling;
    if (nextElement && nextElement.tagName === 'TABLE' && nextElement.classList.contains('ttxt2')) {
      return { header: headerTable, section: nextElement as HTMLTableElement };
    }
  }

  return null;
}

function setSectionVisibility(
  elements: { header: HTMLTableElement; section: HTMLTableElement },
  isHidden: boolean
) {
  const displayValue = isHidden ? 'none' : '';
  elements.header.style.display = displayValue;
  elements.section.style.display = displayValue;
}

function setupSectionToggle(options: {
  headerText: string;
  storageKey: string;
  menuLabelHidden: string;
  menuLabelShown: string;
}) {
  const elements = findSectionAfterHeader(options.headerText);
  if (!elements) {
    return;
  }

  const isHidden = Boolean(GM_getValue(options.storageKey, false));
  setSectionVisibility(elements, isHidden);

  const label = isHidden ? options.menuLabelShown : options.menuLabelHidden;

  GM_registerMenuCommand(label, () => {
    const currentlyHidden = Boolean(GM_getValue(options.storageKey, false));

    if (currentlyHidden) {
      GM_deleteValue(options.storageKey);
      window.location.reload();
      return;
    }

    GM_setValue(options.storageKey, true);
    window.location.reload();
  });
}

function setVisualNoiseVisibility(isHidden: boolean) {
  for (const selector of visualNoiseSelectors) {
    const elements = document.querySelectorAll<HTMLElement>(selector);
    for (const element of Array.from(elements)) {
      element.style.display = isHidden ? 'none' : '';
    }
  }
}

function setupVisualNoiseToggle() {
  if (visualNoiseSelectors.length === 0) {
    return;
  }

  const isHidden = Boolean(GM_getValue(visualNoiseHiddenKey, false));
  setVisualNoiseVisibility(isHidden);

  const label = isHidden ? 'Show visual noise' : 'Hide visual noise';

  GM_registerMenuCommand(label, () => {
    const currentlyHidden = Boolean(GM_getValue(visualNoiseHiddenKey, false));

    if (currentlyHidden) {
      GM_deleteValue(visualNoiseHiddenKey);
      window.location.reload();
      return;
    }

    GM_setValue(visualNoiseHiddenKey, true);
    window.location.reload();
  });
}

function setClearViewEnabled(isEnabled: boolean) {
  document.body.classList.toggle('clear-view', isEnabled);
}

function setupClearViewToggle() {
  const isEnabled = Boolean(GM_getValue(clearViewKey, false));
  setClearViewEnabled(isEnabled);

  const label = isEnabled ? 'Use Basic View' : 'Use Clear View';

  GM_registerMenuCommand(label, () => {
    const currentlyEnabled = Boolean(GM_getValue(clearViewKey, false));

    if (currentlyEnabled) {
      GM_deleteValue(clearViewKey);
      window.location.reload();
      return;
    }

    GM_setValue(clearViewKey, true);
    window.location.reload();
  });
}

function initCommentVisibility() {
  setupSectionToggle({
    headerText: 'Обсуждение',
    storageKey: commentsHiddenKey,
    menuLabelHidden: 'Hide comments',
    menuLabelShown: 'Show comments',
  });

  setupSectionToggle({
    headerText: 'Добавить комментарий',
    storageKey: addCommentHiddenKey,
    menuLabelHidden: 'Hide add comment section',
    menuLabelShown: 'Show add comment section',
  });

  setupVisualNoiseToggle();
  setupClearViewToggle();
}

export function initCommentsVisibility() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCommentVisibility, { once: true });
    return;
  }

  initCommentVisibility();
}
