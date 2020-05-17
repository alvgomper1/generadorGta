var codigos = [ '2AB6mw', '2AG5th', '2AH7hd', '2AS3tm', '2AU2hc', '2AU7vo',
		'2AX6iq', '2AZ5nx', '2BF8bf', '2BJ2bk', '2BU5gn', '2BW7th', '2BY8qp',
		'2CA2ew', '2CA5hy', '2CB6au', '2CE2bd', '2CL6as', '2CL6bp', '2CN4us',
		'2DL3gd', '2DZ8bg', '2EC5rq', '2EC6fj', '2EE8pt', '2EK4zu', '2EP7ji',
		'2EX4xv', '2FE6pz', '2FE8cz', '2FH8ei', '2FN9fy', '2FV2rs', '2FV8hh',
		'2FW2iz', '2FZ7di', '2GC8zc', '2GF8wo', '2GV4ke', '2GX2pd', '2GX8ke',
		'2HH4sy', '2HK3sb', '2HT5ch', '2HU7na', '2HX3ya', '2HZ4qm', '2HZ6go',
		'2JK6eq', '2JL8dp', '2JP7cm', '2JP7md', '2JR3vm', '2JT7yk', '2KA8ri',
		'2KP6mp', '2KQ4wz', '2KV9ma', '2LH5er', '2LM8qt', '2LR4mg', '2LR7hm',
		'2LT6mm', '2MN7yn', '2MN9hd', '2NR2af', '2PA6gi', '2PB2cp', '2PE8wf',
		'2PM9qj', '2PZ6gd', '2QF3xo', '2QF7kh', '2QQ2cv', '2QS2jy', '2QS5qx',
		'2QS9ky', '2RP4sf', '2RZ5cf', '2SA8eb', '2SD6tv', '2SG4wp', '2SM3kj',
		'2SN7xg', '2SP8uu', '2TT7ui', '2TV8hp', '2TZ5kd', '2UD2yz', '2UG5ti',
		'2UL9jd', '2UN9tx', '2UR2ut', '2UT8ky', '2UU4hc', '2UW3sh', '2VK5vj',
		'2VP8hg', '2VS7za', '2VT4pk', '2VV9bc', '2VV9qi', '2VY6nn', '2WE6gi',
		'2WK8nw', '2WM7xv', '2WP5df', '2WZ2tt', '2WZ6hn', '2XE4gu', '2XE8ok',
		'2XJ2ab', '2XK9dm', '2XR8me', '2YL2rm', '2YT4wg', '2YU5ms', '2ZA3qw',
		'2ZC6ty', '2ZF5id', '2ZL6ab', '2ZM4dx', '2ZN6ns', '2ZP8kv', '2ZQ4ab',
		'2ZR2ko', '2ZV8xe', '2ZX3yz', '3AC7jh', '3AF4kk', '3AQ6ge', '3AX3ik',
		'3BA2oa', '3BA5sm', '3BE6cq', '3BP8ar', '3BU3mr', '3BY4cj', '3CC6mp',
		'3CD8vo', '3CE9vj', '3CG4hw', '3CG5eb', '3CH6ed', '3CJ5dg', '3CW9ts',
		'3CY4to', '3DU5pu', '3DW7tz', '3EM2ot', '3EQ8ve', '3EV6yb', '3FA4we',
		'3FA8qz', '3FV8wa', '3FX5tr', '3GZ8on', '3GZ9rd', '3HA9aw', '3HJ2ee',
		'3HM2zy', '3HR2xy', '3JC9tp', '3JG6jq', '3JH4uq', '3JR6ks', '3JV3dw',
		'3KB9ry', '3KC4gj', '3KD5eq', '3KN9vn', '3KQ2us', '3KR4qy', '3KR8xv',
		'3KW2kj', '3KW8rw', '3KX9de', '3KY7rb', '3LH7rt', '3LK5ta', '3LK6dm',
		'3LL5nh', '3LL7vf', '3LL8at', '3LQ3yz', '3MA8yd', '3MC3mx', '3MC5md',
		'3MS2mh', '3MT6rk', '3MX7fb', '3NA3yx', '3NM4or', '3NV5cn', '3PH4ug',
		'3PP7nx', '3PS6tj', '3PT7eq', '3PV7pi', '3PZ5zb', '3QB8dn', '3QJ8xh',
		'3QK5yf', '3QP6hx', '3QR2yg', '3RE4qv', '3RF2cp', '3RL6zr', '3RW3ie',
		'3SA2ad', '3SB6uj', '3SF2pc', '3SH9ii', '3SM3vw', '3ST9bo', '3TD3on',
		'3TD8ev', '3TE2kx', '3TN4at', '3TR6ni', '3TY6aj', '3UG8vv', '3UH4mt',
		'3UM6jq', '3UV3sz', '3VA9zn', '3VF3qi', '3VG8nf', '3VV7uk', '3VZ5bc',
		'3WC2en', '3WD7bv', '3WF8eq', '3XU3jw', '3XZ5yi', '3YH3vq', '3YK4ez',
		'3YK9dk', '3YS5af', '3YS9jy', '3ZC7ic', '3ZF8ze', '3ZG7im', '3ZQ5vz',
		'3ZV2hh', '4AA3ce', '4AK5cg', '4AN6vo', '4AQ2wt', '4BF2if', '4BF8gx',
		'4BG3ms', '4BM9kh', '4BQ7gx', '4BT7kh', '4BW2ow', '4CE7rf', '4CV6ot',
		'4DA9cs', '4DE9sg', '4DE9up', '4DJ7ts', '4DL2vj', '4DL9ok', '4DQ6yw',
		'4DR4ho', '4EA5pp', '4EE7vi', '4EJ3cr', '4EM4vz', '4EV3au', '4EX4yo',
		'4EY6wy', '4FB4gk', '4FC3cr', '4FD7ku', '4FF4ar', '4FM6tv', '4FQ4gz',
		'4FQ5gv', '4GB8bq', '4GM7rq', '4GW9xv', '4HL2zk', '4HP5zx', '4HS4jw',
		'4HT4qg', '4HU8hu', '4HW8ew', '4HX3cj', '4HX3cs', '4JF3xh', '4JJ2xp',
		'4JJ5qv', '4JM2hp', '4JP6ep', '4JV3dj', '4JV8jw', '4JW6pt', '4JZ9yc',
		'4KH6kf', '4KM7sn', '4KY4ia', '4KZ6ub', '4LF5nq', '4LF9jh', '4LK4xf',
		'4LY9xe', '4LZ2ap', '4MB3io', '4MX5ts', '4NH6bw', '4NJ2ag', '4NL4hn',
		'4NQ9wi', '4PF5ku', '4PZ4gn', '4PZ6do', '4QA4qe', '4QH7js', '4QJ7yy',
		'4QM4ga', '4QQ7wm', '4QV3cw', '4RC3vk', '4RF6sx', '4RT8jz', '4RV3rr',
		'4RV6hh', '4SD9mf', '4SF8id', '4SH8ri', '4SK6xt', '4SM9ga', '4SP2sm',
		'4SV6zq', '4SX7yf', '4SY4kc', '4TB5gx', '4TT3xt', '4TX9jn', '4TY5sf',
		'4UA7qp', '4UF5di', '4UG7hm', '4UN6fa', '4UR2kg', '4VB3nx', '4VT5wg',
		'4VX8va', '4WQ7ry', '4WT3gn', '4XD3mt', '4XG7kj', '4XM8sj', '4XS9kn',
		'4XV4eb', '4XX2rq', '4YF2ti', '4YJ8oh', '4YJ9oo', '4YN3fs', '4YP3sm',
		'4YR2ni', '4YT8bn', '4YY2dh', '4ZE2za', '4ZH3sy', '4ZJ3ej', '4ZQ7tu',
		'4ZU3sm', '5AA6yo', '5AR8eo', '5AU2ci', '5BA2on', '5BH2ui', '5BM6pi',
		'5CD6oi', '5CE3df', '5CJ4my', '5CL4xc', '5CM3oa', '5CM8br', '5CS3uk',
		'5DC6ib', '5DJ7hy', '5DS6zp', '5DZ4gy', '5FC3nz', '5FE7vw', '5FT8fo',
		'5GF3pk', '5GP8vk', '5GY6ew', '5HA7mq', '5HH8ng', '5HT4qm', '5JB7ak',
		'5JK4bd', '5JL3vw', '5JL3zn', '5JX5hy', '5KJ9vw', '5KX4ga', '5KY8sk',
		'5LC4eb', '5LD2os', '5LV8fd', '5LV8pz', '5LY9ij', '5MB8tw', '5MB8zm',
		'5MD3rh', '5MF2dm', '5MF6hy', '5MG8th', '5MH2ug', '5MH8ib', '5MJ5mj',
		'5MP6oh', '5MQ4bn', '5MR3io', '5NA7wk', '5NE7fb', '5NK3ny', '5NT9ne',
		'5NT9nr', '5NU8on', '5NV2yd', '5NW7xr', '5NY5bv', '5NY9mr', '5PA8wz',
		'5PB2cj', '5PE4yu', '5PH3wn', '5PQ8hc', '5PQ8na', '5PT5nj', '5PT6ek',
		'5PU6uy', '5PU8yf', '5PX9yx', '5PZ4vq', '5QH7ra', '5QR7hw', '5QS6ee',
		'5QW3um', '5RP7ja', '5RS5oy', '5RT6ca', '5RY8oc', '5SA7fw', '5SD8fx',
		'5SD9au', '5SG3ki', '5SG9vm', '5SH5fh', '5SK3nf', '5SN9wv', '5ST7uy',
		'5TG2kp', '5TX8qh', '5UB5qd', '5UC4tc', '5UF6pa', '5UG5js', '5UG6hk',
		'5UJ7sn', '5UP2jx', '5UQ4yz', '5UW5ia', '5VH2ng', '5VQ2pz', '5VU2dv',
		'5WG4ez', '5WJ2as', '5WJ8nj', '5WS3ma', '5XA2ag', '5XB7ir', '5XF3gx',
		'5XJ4qs', '5XL9iw', '5XP7on', '5XT4qo', '5XU6ei', '5YE2ok', '5YN6rc',
		'5YS3zx', '5YU7fq', '5YV2ve', '5YX6fq', '5YZ5no', '5ZA9sn', '5ZB8eu',
		'5ZC4kq', '5ZD3kn', '5ZP3gg', '6AD2bj', '6AG7fb', '6AM9hw', '6AT4jk',
		'6AU3qu', '6AX5dr', '6AZ5hu', '6BE4gd', '6BQ3aw', '6BR5zh', '6BR8so',
		'6CD2ny', '6CE5pu', '6CS6jo', '6CZ4hc', '6CZ4jv', '6DA4me', '6DA8rt',
		'6DD3bv', '6DE7dr', '6DF8ja', '6DG8nv', '6DJ9wr', '6DK6gv', '6DL9sy',
		'6DP2ka', '6DX7ke', '6DZ4wr', '6DZ7km', '6EA8kp', '6EA9ja', '6EP6so',
		'6ER5zh', '6EU3gc', '6EV4bt', '6FG4ya', '6FJ7sf', '6FN8aq', '6FR4or',
		'6FS8ta', '6FX7pr', '6FY5es', '6GA9rv', '6GC5bz', '6GT9ef', '6GV7id',
		'6HA2us', '6HC9uc', '6HG6rj', '6HP2vy', '6HQ9vb', '6JB5do', '6JC2ia',
		'6JD5yr', '6JM5qm', '6KA8na', '6KC4fs', '6KM2xi', '6KM5to', '6KT4kn',
		'6KT5fx', '6KU6qa', '6KV5tr', '6KV5ye', '6KX4oa', '6LA8wp', '6LC6kd',
		'6LM3xh', '6LU9hd', '6LW9do', '6MJ9de', '6MU7vv', '6MV8ri', '6MY3vw',
		'6NJ3vh', '6NM2zt', '6NM4gg', '6NS2zc', '6NU4jm', '6PL5cx', '6PP3ic',
		'6PQ2zd', '6PR7zq', '6QH9iz', '6QJ5aw', '6QM3es', '6QP6xh', '6QY4ef',
		'6RC8cj', '6RE7ph', '6RK2ks', '6RL8ht', '6SD3me', '6SF7ue', '6SJ4wa',
		'6SN4zs', '6SR2bz', '6ST5wq', '6SU4mo', '6SU4pj', '6SY2er', '6TD3yf',
		'6TD9zu', '6TF6if', '6TG5ob', '6TH8pn', '6UP2dj', '6UP4dr', '6UZ8ef',
		'6VB9bi', '6VH2be', '6VM4qb', '6VM6dr', '6VW3pn', '6VY7kj', '6VZ7gv',
		'6WR6pk', '6WT7jv', '6XC8wh', '6XD8vv', '6XG4vd', '6XJ3zr', '6XY2fk',
		'6YA2ry', '6YC2fr', '6YF6tm', '6YJ7co', '6YJ7pg', '6YN2me', '6ZD3rf',
		'6ZE6rg', '6ZL3jh', '6ZM2ze', '6ZN8sw', '6ZZ9gh', '7AE6pk', '7AF9ev',
		'7AL3fh', '7BC5ze', '7BD7jv', '7BM4hz', '7BR7td', '7BS4yj', '7CB8yv',
		'7CD7hm', '7CG2if', '7DL5io', '7DS4wm', '7DV8pr', '7EK2ah', '7EM9si',
		'7EN5en', '7ES4eq', '7EU5zo', '7EV5kp', '7EV8do', '7FB5xq', '7FJ3ix',
		'7FJ5ti', '7FX9ot', '7FZ4fb', '7GB8qi', '7GD7rq', '7GH3ri', '7GN5ph',
		'7GU8op', '7GW4ea', '7GZ9kn', '7HV5ng', '7HY5tb', '7JB7vc', '7JL7cu',
		'7JV2jy', '7KA9ih', '7KE2hu', '7KN7gw', '7KR6bd', '7KT4zc', '7KU8vu',
		'7KW2jd', '7LC7rq', '7LH9ok', '7LX8ec', '7LY6om', '7MB9og', '7MU2fe',
		'7NC9zq', '7ND9ix', '7NH5ej', '7NJ5gt', '7NP9rk', '7NT2kj', '7NU2df',
		'7PB4sw', '7PF5rc', '7PK5cy', '7PL3pw', '7PP5fe', '7PP7af', '7PQ6dm',
		'7PV5fo', '7QE5xm', '7QJ6yy', '7QJ9cf', '7QK4fm', '7QN2eh', '7QQ4wh',
		'7QS6ky', '7RG4bz', '7RM9gk', '7RQ2aa', '7RV3ws', '7SE2iv', '7SE7vr',
		'7SF5qi', '7SH3ad', '7SJ4dz', '7SU9uf', '7TD6wr', '7TS5tn', '7TS6ke',
		'7UA2xp', '7UA3we', '7UG9qd', '7UZ2gu', '7VB5vj', '7VC7nc', '7VH6zb',
		'7WE3ak', '7WR7ot', '7WX5va', '7WY7yu', '7XE5fd', '7XN3dv', '7XQ9yc',
		'7XS5pd', '7XU6su', '7XW3xw', '7XW6os', '7XZ9hz', '7YD7ap', '7YK4zz',
		'7YK8kq', '7YM4qu', '7YM7za', '7YR3zg', '7YZ8nw', '7ZD2kz', '7ZF6nm',
		'7ZG8rm', '7ZH9xc', '7ZL7pp', '7ZR2os', '7ZS4je', '7ZT3jc', '7ZU4rj',
		'7ZV6pu', '8AJ3ao', '8AM3tk', '8AQ2us', '8AU5hr', '8AZ3nq', '8BG9wy',
		'8BJ3mg', '8BK8qu', '8BL9cb', '8BS7je', '8BS9xa', '8BT7wb', '8CG4yt',
		'8CM5pa', '8CZ2ma', '8DM7iu', '8DR9gc', '8EL8gi', '8EQ9sh', '8ER4od',
		'8FC2bu', '8FJ6sd', '8FS2bx', '8FW5oo', '8FX4pg', '8GM3wz', '8GP2xr',
		'8GS9rg', '8GT6fa', '8GZ4sw', '8HA3pd', '8HL5vu', '8HQ4vg', '8JA2ka',
		'8JJ2bh', '8JZ6of', '8KB5fi', '8KD3jc', '8KH7dz', '8KJ5qr', '8KK9hr',
		'8KV2os', '8LF9xr', '8LN6vf', '8LR5uv', '8LV3se', '8LX8mf', '8ME5xp',
		'8MY7no', '8NS6nj', '8NW2ck', '8NX3nj', '8PE5hy', '8PJ6hy', '8PJ8ra',
		'8PK7ad', '8PR3un', '8PR3zt', '8PT3mm', '8PU6oj', '8QE8gw', '8QF5wg',
		'8QR4ro', '8QR6pq', '8QR7jj', '8QR8eu', '8QS2dc', '8QW8eq', '8RU7qr',
		'8RY5bg', '8RY7fj', '8SL8zi', '8SN9fg', '8SR8dz', '8SS7mp', '8ST4zq',
		'8SV9mh', '8SW5ao', '8SX4vq', '8TD3vu', '8TF3as', '8TG2ja', '8TV6no',
		'8UJ9um', '8US2dk', '8US3ds', '8UY3et', '8VA4en', '8VA6mi', '8VB4pc',
		'8VD9ik', '8VP9ee', '8VR9nf', '8VT9wm', '8WA2gh', '8WC9yq', '8WD9wr',
		'8WT2vv', '8WW4qm', '8WY8zw', '8XA6mn', '8XC5rw', '8XS5xp', '8YC4yp',
		'8YD9yi', '8YM3do', '8YQ4dq', '8YW7ys', '8YX4kg', '8ZA4qn', '8ZM9oj',
		'8ZN7pq', '8ZN8md', '8ZV5up', '8ZY2ar', '9AC7va', '9AE4wp', '9AE6nu',
		'9AL2xa', '9AT7pc', '9BK5ko', '9BS6rw', '9BW8ry', '9BZ2ou', '9CT3hy',
		'9CU4hu', '9CV3dd', '9CV6an', '9CV6sw', '9DH4gr', '9DJ7vb', '9DL7an',
		'9DM2cq', '9DV7od', '9ED2ga', '9EL3ni', '9EV4ac', '9EX7pz', '9EZ8jj',
		'9FR9na', '9FS3hi', '9FS5vt', '9FV6yw', '9GB7vn', '9GC8yj', '9GD9ti',
		'9GH5oc', '9GR3ux', '9GV4gw', '9GV6hb', '9GX9ih', '9GY7dv', '9GZ6rv',
		'9GZ7ix', '9HC7bh', '9HF2xu', '9HR2dg', '9JA8rh', '9JD8oq', '9JF3sd',
		'9JG8qy', '9JK9tc', '9JL3pr', '9JT9pe', '9JU5qk', '9JV7en', '9JW7kz',
		'9JY2fo', '9KA9cv', '9KJ3fu', '9KL2ho', '9KT2ez', '9KU8hw', '9KU9er',
		'9KU9xf', '9LC8hr', '9LD8oy', '9LQ4oa', '9LW2jo', '9LZ4tr', '9MD5oc',
		'9ME7np', '9MS6dh', '9MU3zn', '9MZ5zz', '9ND2ff', '9ND4yw', '9NH8sc',
		'9NK5ez', '9NK7dj', '9NL4px', '9NR6wq', '9PD2ef', '9PD2tv', '9PE9ab',
		'9PG6qj', '9PK2xa', '9PL3zo', '9PP8kh', '9PU7pv', '9PX7ym', '9PX8er',
		'9QJ4oa', '9RQ6ve', '9RS2qg', '9RX9ep', '9RZ7te', '9SD6vk', '9SE3gq',
		'9SE6ht', '9SM7oi', '9SP2rk', '9TF7zj', '9TG4df', '9TH6xw', '9TM7zb',
		'9TU2fr', '9TY6zd', '9UA4fa', '9UA5wu', '9UE6eg', '9UH5fb', '9UH6bd',
		'9UH7qu', '9VA5wb', '9VK2ae', '9VY9ro', '9WC5oo', '9WP9rj', '9WQ4qd',
		'9WS3cf', '9WU7wv', '9WX3ik', '9XL4mh', '9XX9ie', '9YB4bz', '9YL4de',
		'9ZD3bt', '9ZJ5tv', '9ZP5tq', '9ZS6qh', '9ZT7hj', '9ZX9ie', '9ZY9wa' ];
var min = 0;
var max = codigos.length;

function nuevoCodigo() {
	var aleatorio = Math.floor(Math.random() * (codigos.length));
	var aleatorio2 = Math.floor(Math.random() * (codigos.length));

	document.getElementById("mostrarGenerado").innerHTML = "Correo: cuentaGta."
			+ codigos[aleatorio2] + "@gmail.com\nCodigo: " + codigos[aleatorio];
}

function move() {
	var elem = document.getElementById("myBar");
	var width = 0;
	var id = setInterval(frame, 300);
	function frame() {
		if (width >= 100) {
			clearInterval(id);
			document.getElementById("mensaje").innerHTML = "Cuenta generada correctamente"
				nuevoCodigo();
		} else {

			width++;
			elem.style.width = width + '%';
			document.getElementById("label").innerHTML = width * 1 + '%';
			for (width; width >= 5 && width < 6; width++) {
				document.getElementById("mensaje").innerHTML = "Generando datos...";
				document.getElementById("label").innerHTML = width * 1 + '%';
			}
			for (width; width < 26 && width >= 25; width++) {
				document.getElementById("mensaje").innerHTML = "Añadiendo codigo de generación";
				document.getElementById("label").innerHTML = width * 1 + '%';
			}
			for (width; width < 51 && width >= 50; width++) {
				document.getElementById("mensaje").innerHTML = "Subiendo recursos";
				document.getElementById("label").innerHTML = width * 1 + '%';
			}
			for (width; width < 81 && width >= 80; width++) {
				document.getElementById("mensaje").innerHTML = "Guardando progreso";
				document.getElementById("label").innerHTML = width * 1 + '%';
			}

		}
	}
}
