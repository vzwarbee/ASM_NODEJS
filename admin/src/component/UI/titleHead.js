import { Helmet } from 'react-helmet';

function HeadTitle({ title }) {
    return (
        <Helmet>
            <title>{title}</title>
        </Helmet>
    );
}

export default HeadTitle