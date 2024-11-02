import { B, Span } from 'components';
import { useTranslation } from 'react-i18next';

import { capitalizeFirstLetter } from 'utils';

interface Props {
  path: (string | null | undefined)[];
}

export const ProductPath = ({ path }: Props) => {
  const { t } = useTranslation(['common']);

  const nonEmptyPath: string[] = path.filter((v) => typeof v === 'string');

  return (
    <p>
      <Span>
        {t('common:main')}
        {nonEmptyPath.length ? (
          nonEmptyPath.map((v, i) => {
            if (nonEmptyPath.length === i + 1) return <B key={i}>{" → " + capitalizeFirstLetter(v)}</B>;
            return ` → ${capitalizeFirstLetter(v)} `;
          })
        ) : (
          <B>{" → " + t('common:catalog')}</B>
        )}
      </Span>
    </p>
  );
};
